import * as Yup from "yup";

type obj = { [key: string]: any };

/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== "number" && value === "") {
    return true;
  } else if (typeof value === "undefined" || value === undefined) {
    return true;
  } else if (value !== null && typeof value === "object" && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};

/*
 * Why `path!` ? because it could be `undefined` in some case
 * https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
 */
export const parseErrorSchema = (
  error: Yup.ValidationError,
  validateAllFieldCriteria: boolean
) => {
  return (error.inner || []).reduce<Record<string, any>>((previous, error) => {
    if (!previous[error.path!]) {
      previous[error.path!] = { message: error.message, type: error.type! };
    }

    if (validateAllFieldCriteria) {
      const types = previous[error.path!].types;
      const messages = types && types[error.type!];

      previous[error.path!] = appendErrors(
        error.path!,
        validateAllFieldCriteria,
        previous,
        error.type!,
        messages
          ? ([] as string[]).concat(messages as string[], error.message)
          : error.message
      );
    }

    return previous;
  }, {});
};

const appendErrors = (
  name: string,
  validateAllFieldCriteria: boolean,
  errors: Record<any, any>,
  type: string,
  message: string[] | string
) =>
  validateAllFieldCriteria
    ? {
        ...errors[name],
        types: {
          ...(errors[name] && errors[name].types ? errors[name].types : {}),
          [type]: message || true
        }
      }
    : {};

// Util class for map error from class validator
// any: ValidationError from class-validator
export const mapErrors: any = (errors: any[]) => {
  return errors.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.property]:
        curr.children?.length > 0
          ? mapErrors(curr.children)
          : Object.values(curr.constraints ?? {})
    }),
    {}
  );
};

export const omit = <Ob extends Record<any, any>>(obj: Ob, keys: (keyof Ob)[]): Ob => {
  const newObj: obj = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (!keys.includes(key)) {
      newObj[key] = value;
    }
  });
  return newObj as Ob;
};

/*Instances of mongoose models have a _doc property, which stores the original model information.
This helper helps to get that value and then use the omit function to hide the properties we want.*/
export const omitForModel = <Ob extends Record<any, any>>(
  obj: Ob,
  keys: (keyof Ob)[]
): Ob => {
  const doc = obj._doc as Ob;
  return omit(doc ? doc : obj, keys);
};

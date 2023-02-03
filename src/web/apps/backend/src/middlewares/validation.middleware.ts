import {RequestHandler} from 'express';
import * as Yup from 'yup';
import {error} from '@utils/responses';
import {parseErrorSchema} from '@/utils/helpers';
import HttpStatusCode from '@/utils/httpStatusCode';

const validationMiddleware = (schema: Yup.AnyObjectSchema, value: string | 'body' | 'query' | 'params' = 'body'): RequestHandler => {
  return async (req: any, res, next) => {
    try {
      req.validated = await schema.validate(req[value], {
        abortEarly: false,
        stripUnknown: true
      });
      return next();
    } catch (e: any) {
      return error(res, parseErrorSchema(e, true), HttpStatusCode.UNPROCESSABLE_ENTITY);
    }
  }
}

export default validationMiddleware;

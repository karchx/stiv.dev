import * as Yup from 'yup';

export const createProjectDto = Yup.object({}).shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  github: Yup.string().required().url(),
  tags: Yup.array().of(Yup.string()).required()
});

export type CreateProjectDto = Yup.InferType<typeof createProjectDto>;

import Joi from "joi";

export const addTodovalidator = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().required()
});

export const updateTodovalidator = Joi.object({
  title: Joi.string(),
  icon: Joi.string(),
  completed: Joi.boolean()
});

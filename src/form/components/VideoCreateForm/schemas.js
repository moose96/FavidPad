import Joi from 'joi';

export const formScheme = Joi.object().keys({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(10).required(),
  video_url: Joi.string().uri().required(),
});
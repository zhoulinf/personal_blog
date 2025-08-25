import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  db: Joi.object({
    host: Joi.string()
      .ip({version: ['ipv4', 'ipv6']}) // 必须是合法 IP 地址
      .required(),
    port: Joi.number().port().required(), // 必须是合法端口号（1-65535）
    username: Joi.string().required(),
    password: Joi.string().required(),
    database: Joi.string().required(),
  }).required(),
});

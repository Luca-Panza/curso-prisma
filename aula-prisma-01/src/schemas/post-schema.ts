import baseJoi, { Root } from "joi";
import joiDate from "@joi/date";

const Joi: Root = baseJoi.extend(joiDate);

import { CreatePost } from "../repositories/post-repository";

export const postSchema = Joi.object<CreatePost>({
  username: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  createdAt: Joi.date().format("YYYY-MM-DD"),
});

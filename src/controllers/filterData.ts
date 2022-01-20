import { postObj } from "../utils/postObj";
import { getPostByID } from "./post";
import { Request, Response } from 'express';

const filterJsonData = () => {
  let post: postObj
  let req: Request
  let res: Response
  let response = getPostByID(req, res)


};
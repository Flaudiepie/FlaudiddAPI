import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

const getPostByID = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const accesstoken: string = req.params.accesstoken;
  const subreddit: string = req.params.subreddit;
  if (!accesstoken || !id || !subreddit) {
    return res.status(400).json({ message: 'Parameters are missing.' });
  }
  const requestURL: string =
    'https://oauth.reddit.com/r/' + subreddit + '/api/info';
  const result: AxiosResponse = await axios.get(requestURL, { params: { id } });
  return res.status(200).json({ message: result.data });
};

import { postTypeNum } from "./postTypeNum"
import { voteStateNum } from "./voteStateNum"

export interface postObj {
  id: string
  title: string
  author: string
  created: Date
  downvotes: number
  upvotes: number
  edited: boolean
  voteState: voteStateNum
  nsfw: boolean
  spoiler: boolean
  path: string
  content: any
  removed: boolean
  thumbnail: string
  upvoteratio: number
  subreddit: string
  url: string
  posttype: postTypeNum
}

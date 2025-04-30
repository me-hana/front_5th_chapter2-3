import { User } from "../../user/model/user.type";

export interface Comment {
  id: number;
  body: string;
  postId: number;
  user: User;
  likes: number;
}

export interface NewCommentInput {
  body: string;
  postId: number | null;
  userId: number;
}

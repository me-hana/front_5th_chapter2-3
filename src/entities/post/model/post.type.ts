import { User } from "../../user/model/user.type";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags?: string[];
  reactions?: {
    likes: number;
    dislikes: number;
  };
  author?: User;
}

export interface Tag {
  slug: string;
  url: string;
}

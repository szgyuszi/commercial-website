export interface Post {
  postId: number;
  postTitle: string;
  postImg: string;
  postDate: string;
  postLikes: number;
  userId: number;
  userName: string;
  userImg: string;
}

export interface RecentlyCreatedPost {
  postTitle: string;
  postImg: string;
  userId: number;
}

export interface UserContextInterface {
  id: number | null;
  name: string | null;
  userImg: string | null;
}

export interface userDetails {
  email: string;
  password: string;
}

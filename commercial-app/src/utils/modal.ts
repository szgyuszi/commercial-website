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

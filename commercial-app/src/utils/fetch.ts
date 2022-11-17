import { RecentlyCreatedPost } from "./modal";

export const getPosts = async () => {
  const res = await fetch("/posts");
  return await res.json();
};

export const getPostById = async (postId: number) => {
  const res = await fetch(`/posts/${postId}`);
  return await res.json();
};

export const deletePostById = async (postId: number) => {
  const res = await fetch(`/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await res.json();
};

export const createPost = async (post: RecentlyCreatedPost) => {
  const res = await fetch("/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(post),
  });
  return await res.json();
};

export const getCategories = async () => {
  const res = await fetch("/categories");
  return await res.json();
};

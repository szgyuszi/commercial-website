import { newUser, RecentlyCreatedPost, userDetails } from "./modal";

export const getPosts = async () => {
  const res = await fetch("/posts");
  return await res.json();
};

export const getPostById = async (postId: string) => {
  const res = await fetch(`/posts/${postId}`);
  return await res.json();
};

export const deletePostById = async (postId: string) => {
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

export const loginUser = async (userDetails: userDetails) => {
  const res = await fetch("/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(userDetails),
  });
  if (res.status === 404) {
    return { error: "Invalid Email or password" };
  }
  return await res.json();
};

export const registerUser = async (newUser: newUser) => {
  const res = await fetch("/users/new", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(newUser),
  });
  if (res.status === 401) {
    return { error: "Email already had been used!" };
  }
  return await res.json();
};

export const getPostsByUserId = async (id: number | string) => {
  const res = await fetch(`/posts/user/${id}`);
  if (res.status === 404) {
    return { error: "Wrong user id!" };
  }
  return await res.json();
};

export const getPageProfileById = async (id: string | number) => {
  const res = await fetch(`/users/${id}`);
  if (res.status === 404) {
    return { error: "User not found!" };
  }
  return await res.json();
};

export const getPostsByCategoryId = async (id: string) => {
  console.log(id);

  const res = await fetch(`/posts/category/${id}`);
  if (res.status === 404) {
    return { error: "Category not found!" };
  }
  return await res.json();
};

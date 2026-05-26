import { api } from "./api";

export const getBlogs = async () => {
  const response = await api.get("/posts");

  return response.data;
};

export const getBlogById = async (id: string) => {
  const response = await api.get(`/posts/${id}`);

  return response.data;
};

export const getLatestBlogs = async (maxResults: number = 5) => {
  const response = await api.get("/posts", {
    params: {
      maxResults,
      orderBy: "published",
      sortOrder: "descending",
    },
  });

  return response.data;
};

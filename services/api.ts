import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;
const BLOG_ID = process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID;

export const api = axios.create({
  baseURL: `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}`,
  params: {
    key: API_KEY,
  },
});

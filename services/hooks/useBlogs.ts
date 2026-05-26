"use client";

import { useQuery } from "@tanstack/react-query";

import { getBlogs } from "../blog.service";
import { queryKeys } from "../queryKeys";

export const useBlogs = () => {
  return useQuery({
    queryKey: queryKeys.blogs,
    queryFn: getBlogs,
  });
};

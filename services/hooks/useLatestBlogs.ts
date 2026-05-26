"use client";

import { useQuery } from "@tanstack/react-query";
import { getLatestBlogs } from "../blog.service";
import { queryKeys } from "../queryKeys";

export const useLatestBlogs = (maxResults: number = 5) => {
  return useQuery({
    queryKey: queryKeys.latestBlogs,
    queryFn: () => getLatestBlogs(maxResults),
  });
};

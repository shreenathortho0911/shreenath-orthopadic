"use client";

import { useQuery } from "@tanstack/react-query";

import { getBlogById } from "../blog.service";
import { queryKeys } from "../queryKeys";

export const useBlog = (id: string) => {
  return useQuery({
    queryKey: queryKeys.blog(id),
    queryFn: () => getBlogById(id),
    enabled: !!id,
  });
};

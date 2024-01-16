import { BASE_URL } from "./constants";
import { CourseSeriesRes } from "./types/api/CourseSeriesRes";
import { FAQRes } from "./types/api/FAQRes";
import { TagsRes } from "./types/api/TagRes";

interface RequestOptions {
  method: string;
  body?: string | FormData;
}
const fetchData = async (
  url: string,
  options: RequestOptions,
  contentType: string | undefined = "application/json"
) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": contentType,
    },
    ...options,
  });

  if (response.status === 401) {
    throw new Error("Unauthorized");
  }

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response.json();
};
export const api = {
  getCourses: async (): Promise<CourseSeriesRes> => {
    const url = `${BASE_URL}courses/series/optuser/course-series-eeb9d3`;
    return fetchData(url, {
      method: "GET",
    });
  },
  getTags: async (): Promise<TagsRes> => {
    const url = `${BASE_URL}courses/tags`;
    return fetchData(url, {
      method: "GET",
    });
  },
  getFaqs: async (): Promise<FAQRes> => {
    const url = `${BASE_URL}courses/faqs?language=english`;
    return fetchData(url, {
      method: "GET",
    });
  },
};

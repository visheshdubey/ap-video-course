export interface CourseSeriesRes {
  details: Details;
  courses: Course[];
  relatedTags: RelatedTag[];
  relatedContent: RelatedContent[];
}

export interface Details {
  id: string;
  contentType: string;
  title: string;
  subtitle: string;
  description: string;
  language: string;
  thumbnail: Thumbnail;
  coursesCount: number;
  tagIds: number[];
}

export interface Thumbnail {
  id: string;
  version: number;
  domain: string;
  basePath: string;
  key: string;
  qualities: number[];
  aspectRatio: number;
}

export interface Course {
  id: string;
  contentType: string;
  title: string;
  subtitle: string;
  language: string;
  amount: number;
  originalAmount: number;
  thumbnail: Thumbnail2;
  series: Series;
  courseHours: number;
}

export interface Thumbnail2 {
  id: string;
  version: number;
  domain: string;
  basePath: string;
  key: string;
  qualities: number[];
  aspectRatio: number;
}

export interface Series {
  id: string;
  order: Order;
}

export interface Order {
  seq: number;
}

export interface RelatedTag {
  name: Name;
  tagId: number;
}

export interface Name {
  hindi: string;
  english: string;
}

export interface RelatedContent {
  id: string;
  contentType: string;
  title: string;
  subtitle: string;
  language: string;
  thumbnail: Thumbnail3;
  coursesCount?: number;
  relatedType: number;
  amount?: number;
  originalAmount?: number;
  courseHours?: number;
  highlightTags?: string[];
}

export interface Thumbnail3 {
  id: string;
  version: number;
  domain: string;
  basePath: string;
  key: string;
  qualities: number[];
  aspectRatio: number;
}

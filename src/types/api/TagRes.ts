export type TagsRes = Tags[][];

export interface Tags {
  name: Name;
  tagId: number;
  parent: number;
  level: number;
  hasChildren: boolean;
}

export interface Name {
  hindi: string;
  english: string;
}

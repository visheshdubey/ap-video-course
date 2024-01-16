export type PrimaryMenu = {
  label: string;
  link?: string;
  subMenu?: string[];
  isActive?: boolean;
  isLaptopOnlyVisble?: boolean;
};
export type LanguageMenu = {
  label: string;
  subMenu: string[];
};
export type SideBarMenu = {
  root: {
    text: string;
    url: string;
    hierarchy: string[];
  }[];
  moreLinksArray: {
    text: string;
    url: string;
    hierarchy: string[];
  }[];
  exploreCategoryArray: {
    text: string;
    url: string;
    hierarchy: string[];
  }[];
  login: {
    text: string;
    url: string;
    hierarchy: string[];
  }[];
};

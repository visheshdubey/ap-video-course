const sideBarNavigation = [
  {
    text: "Login",
    url: "/en/login?page=%2Fen%2Fvideo-modules%2Fseries%2Fcourse-series-eeb9d3",
    hierarchy: ["Login"],
  },
  {
    text: "Bhagavad Gita",
    url: "/en/gita",
    hierarchy: [],
  },
  {
    text: "Sant Sarita",
    url: "/en/sant-sarita",
    hierarchy: [],
  },
  {
    text: "Vedant Samhita",
    url: "/en/vedant-samhita",
    hierarchy: [],
  },
  {
    text: "Bodh Pratyusha",
    url: "/en/bodh-pratyusha",
    hierarchy: [],
  },
  {
    text: "AP Books",
    url: "/en/books",
    hierarchy: [],
  },
  {
    text: "AP Articles",
    url: "/en/articles",
    hierarchy: [],
  },
  {
    text: "Video Series",
    url: "/en/video-modules",
    hierarchy: [],
  },
  {
    text: "AP Circle",
    url: "/en/circle",
    hierarchy: [],
  },
  {
    text: "Invite For Talk",
    url: "/en/invite?tIn=0",
    hierarchy: [],
  },
  {
    text: "Invite For an Interview",
    url: "/en/invite?tIn=1",
    hierarchy: [],
  },
  {
    text: "Media and Public Interaction",
    url: "/en/media",
    hierarchy: [],
  },
  {
    text: "Contact Us",
    url: "/en/enquiry",
    hierarchy: [],
  },
  {
    text: "Careers",
    url: "/en/hiring",
    hierarchy: [],
  },
  {
    text: "Donate",
    url: "/en/contribute",
    hierarchy: [],
  },
  {
    text: "PrashantAdvait Foundation",
    url: "/en/prashantadvait-foundation",
    hierarchy: ["MORE", "PrashantAdvait Foundation"],
  },
  {
    text: "Ghar Ghar Upanishad",
    url: "/en/vedant",
    hierarchy: ["MORE", "Ghar Ghar Upanishad"],
  },
  {
    text: "About Acharya Prashant",
    url: "/en/about",
    hierarchy: ["MORE", "About Acharya Prashant"],
  },
  {
    text: "Vedant - Upanishads",
    url: "/en/video-modules/tags/1",
    hierarchy: ["EXPLORE CATEGORIES", "Vedant - Upanishads"],
  },
  {
    text: "Vedant - Bhagavad Gita",
    url: "/en/video-modules/tags/2",
    hierarchy: ["EXPLORE CATEGORIES", "Vedant - Bhagavad Gita"],
  },
  {
    text: "Other Scriptures",
    url: "/en/video-modules/tags/3",
    hierarchy: ["EXPLORE CATEGORIES", "Other Scriptures"],
  },
  {
    text: "Saints and Masters",
    url: "/en/video-modules/tags/4",
    hierarchy: ["EXPLORE CATEGORIES", "Saints and Masters"],
  },
  {
    text: "Other streams",
    url: "/en/video-modules/tags/5",
    hierarchy: ["EXPLORE CATEGORIES", "Other streams"],
  },
  {
    text: "Life Questions",
    url: "/en/video-modules/tags/6",
    hierarchy: ["EXPLORE CATEGORIES", "Life Questions"],
  },
  {
    text: "Technical Support",
    url: "/en/technical-support",
    hierarchy: ["EXPLORE CATEGORIES", "Technical Support"],
  },
];
export const sidebarData = {
  root: sideBarNavigation.filter((item) => item.hierarchy.length === 0),
  moreLinksArray: sideBarNavigation.filter((item) =>
    item.hierarchy.includes("MORE")
  ),
  exploreCategoryArray: sideBarNavigation.filter((item) =>
    item.hierarchy.includes("EXPLORE CATEGORIES")
  ),
  login: sideBarNavigation.filter((item) => item.hierarchy.includes("Login")),
};
export const menuData = [
  { label: "Home", link: "http://example.com/home" },
  {
    label: "Live Sessions",
    subMenu: [
      "Bhagavad Gita",
      "Sant Sarita",
      "Vedant Samhita",
      "Bodh Pratyusha",
      "Subscription",
    ],
  },
  {
    label: "Video Series",
    link: "http://example.com/video-series",
    isActive: true,
  },
  { label: "AP Books", link: "http://example.com/ap-books" },
  { label: "AP Articles", link: "http://example.com/ap-articles" },
  { label: "Invite", subMenu: ["For an Interview", "For a talk"] },
  {
    label: "In Media",
    link: "http://example.com/in-media",
    isLaptopOnlyVisble: true,
  },
  {
    label: "Careers",
    link: "http://example.com/careers",
    isLaptopOnlyVisble: true,
  },
  { label: "Donate", link: "http://example.com/donate" },
];
export const langMenu = {
  label: "EN",
  subMenu: ["Hindi", "English"],
};

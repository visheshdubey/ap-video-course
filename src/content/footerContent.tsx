import { ReactNode } from "react";

import { Icons } from "@/components/icons";

export interface FooterItem {
  icons?: ReactNode;
  image?: string;
  text: string;
  link: string;
  classes: string;
}

export interface FooterSection {
  title: string;
  ap_thumb?: string;
  items: FooterItem[];
}

export interface Footer {
  classes: string;
  liveEvents: FooterSection;
  wisdomContent: FooterSection;
  more: FooterSection;
  socialMedia: {
    title: string;
    english: { title: string; items: FooterItem[] };
    hindi: { title: string; items: FooterItem[] };
  };
  downloadApp: FooterSection;
  contactUs: FooterSection;
}
export const footer: Footer = {
  classes: "bg-slate-900",
  liveEvents: {
    title: "LIVE EVENTS",
    items: [
      {
        text: "Bhagavad Gita",
        link: "/en/gita",
        classes:
          "mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
      {
        text: "Sant Sarita",
        link: "/en/sant-sarita",
        classes:
          "mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
      {
        text: "Vedant Samhita",
        link: "/en/vedant-samhita",
        classes:
          "mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
      {
        text: "Bodh Pratyusha",
        link: "/en/bodh-pratyusha",
        classes:
          "mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
    ],
  },
  wisdomContent: {
    title: "WISDOM CONTENT",
    items: [
      {
        text: "Video Series",
        link: "/en/video-modules",
        classes:
          "mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
      {
        text: "AP Books",
        link: "/en/books",
        classes:
          "mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
      {
        text: "AP Articles",
        link: "/en/articles",
        classes:
          "mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
      {
        text: "AP Circle",
        link: "/en/circle",
        classes: "text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
    ],
  },
  more: {
    title: "MORE",
    items: [
      {
        text: "About Acharya Prashant",
        link: "/en/about",
        classes:
          "mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
      {
        text: "Invite Him",
        link: "/en/invite?tIn=0",
        classes:
          "mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
      {
        text: "Interview Him",
        link: "/en/invite?tIn=1",
        classes:
          "mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
      {
        text: "Ghar Ghar Upanishad",
        link: "/en/vedant",
        classes:
          "mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
      {
        text: "Media and Public Interaction",
        link: "/en/media",
        classes: "text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
    ],
  },
  socialMedia: {
    title: "SOCIAL MEDIA",
    english: {
      title: "For English",
      items: [
        {
          icons: <Icons.youtube />,
          text: "YouTube",
          link: "https://www.youtube.com/c/AcharyaPrashant",
          classes: "text-slate-300 hover:text-brand-700",
        },
        {
          icons: <Icons.twitter />,
          text: "Twitter",
          link: "https://twitter.com/Prashant_Advait",
          classes: "text-slate-300 hover:text-brand-700",
        },
        {
          icons: <Icons.facebook />,
          text: "Facebook",
          link: "https://www.facebook.com/AdvaitAcharyaPrashant",
          classes: "text-slate-300 hover:text-brand-700",
        },
        {
          icons: <Icons.instagram />,
          text: "Instagram",
          link: "https://www.instagram.com/acharya_prashant_paf/",
          classes: "text-slate-300 hover:text-brand-700",
        },
        {
          icons: <Icons.wikipedia />,
          text: "Wikipedia",
          link: "https://www.instagram.com/acharya_prashant_paf/",
          classes: "text-slate-300 hover:text-brand-700",
        },
      ],
    },
    hindi: {
      title: "For Hindi",
      items: [
        {
          icons: <Icons.youtube />,
          text: "YouTube",
          link: "https://www.youtube.com/c/ShriPrashant",
          classes: "text-slate-300 hover:text-brand-700",
        },
        {
          icons: <Icons.twitter />,
          text: "Twitter",
          link: "https://twitter.com/Advait_Prashant",
          classes: "text-slate-300 hover:text-brand-700",
        },
        {
          icons: <Icons.facebook />,
          text: "Threads",
          link: "https://www.threads.net/@acharya_prashant_ap",
          classes: "text-slate-300 hover:text-brand-700",
        },
        {
          icons: <Icons.instagram />,
          text: "Facebook",
          link: "https://www.facebook.com/Acharya.Prashant.Advait",
          classes: "text-slate-300 hover:text-brand-700",
        },
        {
          icons: <Icons.wikipedia />,
          text: "Wikipedia",
          link: "https://www.instagram.com/acharya_prashant_ap/",
          classes: "text-slate-300 hover:text-brand-700",
        },
      ],
    },
  },
  downloadApp: {
    title: "DOWNLOAD APP",
    ap_thumb: "https://acharyaprashant.org/images/ic_favicon.png",
    items: [
      {
        text: "Get it on Google Play",
        image: "https://acharyaprashant.org/images/ic_googleplay.png",
        link: "https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks",
        classes:
          "mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
      {
        text: "Download on the App Store",
        image: "https://acharyaprashant.org/images/ic_appstore.png",
        link: "https://apps.apple.com/in/app/acharya-prashant/id1603611866",
        classes: "text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
    ],
  },
  contactUs: {
    title: "CONTACT US",
    items: [
      {
        icons: <Icons.mail />,
        text: "support@advait.org.in",
        link: "mailto:support@advait.org.in",
        classes:
          "mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
      {
        icons: <Icons.whatsapp />,
        text: "+91 9650585100",
        link: "tel:+919650585100",
        classes:
          "mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
      {
        icons: <Icons.phone />,
        text: "+91 9650585100",
        link: "tel:+919650585100",
        classes: "text-slate-300 hover:cursor-pointer hover:text-brand-700",
      },
    ],
  },
};

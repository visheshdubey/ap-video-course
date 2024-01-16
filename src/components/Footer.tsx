import {
  Footer as FooterType,
  FooterSection as FooterSectionType,
} from "@/content/footerContent";
import { cn } from "@/lib/utils";

const FooterSection = ({
  footerSection,
}: {
  footerSection: FooterSectionType;
}) => (
  <div className="flex flex-col w-full gap-4 px-4 pb-24 mx-auto text-white shrink md:px-4 md:pb-7 md:pt-10">
    <span className="text-lg font-semibold">{footerSection.title}</span>
    {footerSection.items.map((item, index) => (
      <a
        href={item.link}
        key={`moreSection-${index}`}
        className="flex items-center gap-2 text-white hover:text-orange-700"
      >
        {item.icons} {item.text}
      </a>
    ))}
  </div>
);
const Footer = ({ footerContent }: { footerContent: FooterType }) => {
  return (
    <>
      <div
        className={cn(
          footerContent.classes,
          "grid grid-cols-1 md:grid-cols-6 mx-auto   lg:max-w-screen-2xl  w-full"
        )}
      >
        <FooterSection footerSection={footerContent.liveEvents} />
        <FooterSection footerSection={footerContent.wisdomContent} />
        <FooterSection footerSection={footerContent.more} />
        <div className="flex flex-col w-full gap-4 px-4 pb-24 mx-auto text-white max-w-screen-2xl md:px-4 md:pb-7 md:pt-10">
          <span className="text-lg font-semibold">
            {footerContent.socialMedia.title}
          </span>
          <div className="flex flex-col gap-1">
            <span className="font-normal">
              {footerContent.socialMedia.english.title}
            </span>
            <div className="flex gap-2.5">
              {footerContent.socialMedia.english.items.map((items, index) =>
                items.icons ? (
                  <a
                    href={items.link}
                    className="hover:text-orange-700"
                    key={`social-${items.text}-${index}`}
                  >
                    {items.icons}
                  </a>
                ) : null
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-normal">
              {footerContent.socialMedia.hindi.title}
            </span>
            <div className="flex gap-2.5">
              {footerContent.socialMedia.hindi.items.map((items, index) =>
                items.icons ? (
                  <a
                    href={items.link}
                    className="hover:text-orange-700"
                    key={`social-${items.text}-${index}`}
                  >
                    {items.icons}
                  </a>
                ) : null
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 px-4 pb-24 mx-auto text-white max-w-screen-2xl md:px-4 md:pb-7 md:pt-10">
          <span className="text-lg font-semibold">
            {footerContent.downloadApp.title}
          </span>
          <span className="flex gap-2">
            <img
              src={footerContent.downloadApp.ap_thumb}
              alt=""
              className="w-8 h-8 mr-2 rounded-full"
            />{" "}
            Acharya Prashant
          </span>
          {footerContent.downloadApp.items.map((item, index) => (
            <div
              className="mr-4 h-8 w-28   md:w-[114px]"
              key={`footerContent-downloadApp-${index}`}
            >
              <a href={item.link} className="hover:text-orange-700">
                <img
                  src={item.image || ""}
                  className={"rounded-md border-[1.4px] border-slate-300"}
                ></img>
              </a>
            </div>
          ))}
        </div>
        <FooterSection footerSection={footerContent.contactUs} />
      </div>
      <div className="w-full mx-auto border-b border-white/20 max-w-screen-2xl"></div>
      <div className="flex flex-col items-center justify-center py-2 mx-auto text-sm text-white md:justify-around md:flex-row max-w-screen-2xl">
        <span className="">Copyright © 2022 PrashantAdvait Foundation</span>
        <div className="flex gap-2">
          <span>Terms & Conditions</span> |<span>Privacy Policy</span>|
          <span>Undertaking</span>
        </div>
      </div>
    </>
  );
};

export default Footer;

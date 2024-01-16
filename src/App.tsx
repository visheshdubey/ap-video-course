import { Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { api } from "./api";
import DropDownWithIcon from "./components/DropDownWithIcon";
import Footer from "./components/Footer";
import { Icons } from "./components/icons";
import { TagsDropdown } from "./components/PopoverMenu";
import ProductCard from "./components/ProductCard";
import { ScrollArea } from "./components/ui/scroll-area";
import { Separator } from "./components/ui/separator";
import { footer as footerContent } from "./content/footerContent";
import { main } from "./content/main";
import { langMenu, menuData, sidebarData } from "./content/menus";
import { cn } from "./lib/utils";

function App() {
  const courseRes = useQuery(["courses"], () => api.getCourses());
  const faqRes = useQuery(["faqs"], () => api.getFaqs());
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showFullText, setshowFullText] = useState(false);

  // Event handler for window resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth > 720) setshowFullText(false);
    if (windowWidth < 720) setshowFullText(true);
  }, [windowWidth]);

  function trimParagraph(text: string, maxWords = 42) {
    const words = text.split(" ");
    const trimmedWords = words.slice(0, maxWords);
    const trimmedText = trimmedWords.join(" ");
    return showFullText ? (
      <>
        {trimmedText} ...
        <div
          className="text-orange-600 cursor-pointer"
          onClick={() => setshowFullText(false)}
        >
          और पढ़ें
        </div>
      </>
    ) : (
      main.hero.paragraph
    );
  }

  return (
    <div className="relative flex flex-col w-full overflow-clip">
      <div className="w-full bg-[#D24115]">
        <header className="flex items-center justify-between w-full h-12 mx-auto max-w-screen-2xl text-white/90">
          <nav className="flex items-center w-full h-full px-4 lg:px-8">
            <div className="flex items-center h-full grow">
              <a href="http://">
                <img
                  className="w-8 h-8 mr-2 rounded-full"
                  src="https://acharyaprashant.org/images/ic_favicon.png"
                  alt="Acharya Prashant"
                />
              </a>
              <ul className="hidden md:flex grow h-full text-[.875rem] leading-[1.25rem] font-medium text-white/90">
                {menuData.map((item, index) => (
                  <li
                    key={index}
                    className={cn(
                      "flex items-center h-full md:px-1.5 lg:px-2.5 xl:px-4",
                      item.isActive && "bg-[#EA580C]",
                      item.isLaptopOnlyVisble && "hidden lg:block"
                    )}
                  >
                    {item.subMenu ? (
                      <DropDownWithIcon item={item} />
                    ) : (
                      <a
                        href={item.link}
                        className={`flex items-center h-full ${
                          item.subMenu ? "outline-none" : ""
                        }`}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="flex items-center gap-4 space-x-1 w">
              <span className="text-[0.875rem] border-2  rounded flex items-center justify-center font-medium">
                <DropDownWithIcon item={langMenu} />
              </span>
              <Phone size={24} className="hidden lg:block" />
              <Sheet>
                <SheetTrigger>
                  <span className="flex items-center text-sm">
                    <Menu size={24} />
                    <span className="hidden lg:block">Menu</span>
                  </span>
                </SheetTrigger>
                <SheetContent>
                  <ScrollArea className="h-full w-fulll ">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 font-medium text-orange-700">
                        <Icons.login />
                        <a href={sidebarData.login[0].url}>
                          {" "}
                          {sidebarData.login[0].text}
                        </a>
                      </div>
                      <Separator className="my-4" />
                      <div className="flex flex-col gap-0 text-sm">
                        {sidebarData.root.map((item, index) => (
                          <a
                            key={`sideBarData-root-${index}`}
                            className="px-2 py-2 hover:bg-secondary"
                            href={item.url}
                          >
                            {item.text}
                          </a>
                        ))}
                      </div>
                      <Separator className="my-4" />
                      <div className="flex flex-col gap-0 text-sm">
                        <span className="font-medium">MORE</span>
                        {sidebarData.moreLinksArray.map((item, index) => (
                          <a
                            key={`sideBarData-moreLinksArray-${index}`}
                            className="px-2 py-2 hover:bg-secondary"
                            href={item.url}
                          >
                            {item.text}
                          </a>
                        ))}
                      </div>
                      <Separator className="my-4" />
                      <div className="flex flex-col gap-0 text-sm">
                        <span className="font-medium">EXPLORE CATEGORY</span>
                        {sidebarData.exploreCategoryArray.map((item, index) => (
                          <a
                            key={`sideBarData-exploreCategoryArray-${index}`}
                            className="px-2 py-2 hover:bg-secondary"
                            href={item.url}
                          >
                            {item.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            </aside>
          </nav>
        </header>
      </div>

      <section className="flex items-center gap-4 w-full bg-[#1E293B] lg:text-xl text-sm px-4 py-2 justify-between lg:justify-center lg:py-3.5 text-white">
        🔴
        <span>
          Just the right start to your New Year! Support Acharya Prashant's Work
        </span>
        <a
          href="http://"
          className="flex text-sm lg:text-base items-center shrink-0 h-fit rounded-md border border-gray-200 px-2 py-1 text-white lg:py-0.75"
        >
          Click Here
        </a>
      </section>
      <section className="flex z-50 bg-white h-12 sticky top-0 items-center gap-4 w-full shadow text-xl px-4 py-2 lg:justify-center lg:py-3.5 text-white">
        <div className="flex items-center justify-between w-full h-full mx-auto max-w-screen-2xl">
          <div className="flex items-center justify-center pl-4 cursor-pointer laptop:pl-8">
            <div className="laptop:block svelte-eqd6zh">
              <img
                className="object-contain h-6"
                src="https://acharyaprashant.org/images/ic_videoseries.png"
                alt="content home"
              />
            </div>
            <div className="ml-6 hidden w-[36rem] flex-grow md:block">
              <div className="items-center border rounded shadow-sm">
                <div className="relative">
                  <div className="relative flex w-full">
                    <TagsDropdown />
                    <input
                      type="text"
                      className="w-full  h-9 p-2 text-base text-gray-400 caret-[#ea580c] focus:ring-0 active:border-0 outline-none"
                      placeholder="Search for video series"
                    />
                    <button
                      id="main-website-search-courses-btn"
                      className="items-end px-2 py-1 bg-orange-200 rounded-r fill-current text-slate-700"
                    >
                      <Icons.search />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className=" bg-[#ea580c] text-sm px-2 py-1 border-0 rounded-md text-center  transition-all duration-150">
            Login
          </button>
        </div>
      </section>
      <section className="flex h-12 items-center gap-4 w-full  text-xl px-4 py-2 lg:justify-center lg:py-3.5">
        <div className="flex items-center w-full h-full mx-auto text-sm max-w-screen-2xl">
          <div className="flex flex-wrap items-baseline justify-start w-full text-gray-600">
            <div className="mr-1 text-sm cursor-pointer hover:text-brand-600">
              <span className="text-orange-500">Home</span>
            </div>
            <div className="px-1 mr-1 text-gray-subtitle">
              <Icons.greaterThan />
            </div>
            <div className="mr-1 text-sm font-medium">
              <span className="font-hindi">{main.hero.title}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-4 w-full  text-xl px-4 py-2 lg:justify-center lg:py-3.5 ">
        <span className="self-start w-full mx-auto font-medium font-hindi max-w-screen-2xl lg:text-2xl">
          {main.hero.title}
        </span>
        <div className="flex flex-col items-center w-full h-full gap-4 mx-auto text-sm md:flex-row max-w-screen-2xl">
          <div className="relative w-full shrink-0 md:w-2/5">
            <img
              className="object-cover w-full h-full rounded aspect-video"
              src="https://cimg.acharyaprashant.org/images/img-4337ee73-d8a3-4c8b-951b-d09a5a6468d3/10/image.jpg"
              alt="Thumbnail"
            />
            <div className="absolute bottom-0 left-0 w-full text-base font-semibold text-white align-bottom h-1/3 bg-gradient-to-t from-black">
              <img
                className="absolute object-contain h-14 right-1 bottom-1"
                src="https://acharyaprashant.org/images/ic_apsignature_hindi.png"
                alt="AP Name Logo"
              />
            </div>
          </div>
          <div className="flex flex-col self-stretch h-full text-sm md:pl-4 md:pt-0">
            <span className="text-lg font-medium font-hindi">
              {main.hero.heading}
            </span>
            <span className="text-base leading-relaxed tracking-wide text-gray-600 font-hindi">
              {trimParagraph(main.hero.paragraph)}
            </span>
          </div>
        </div>

        <span className="flex flex-col w-full gap-2 mx-auto text-sm font-medium max-w-screen-2xl">
          Share this series:
          <div className="flex gap-4">
            <a
              href=""
              className="flex items-center justify-center w-10 h-10 rounded-full "
            >
              <Icons.facebookBlue />
            </a>
            <a
              href=""
              className="flex items-center justify-center w-10 h-10 rounded-full "
            >
              <Icons.twitterBlue />
            </a>
            <a
              href=""
              className="flex items-center justify-center w-10 h-10 rounded-full "
            >
              <Icons.whatsappGreen />
            </a>
            <a
              href=""
              className="flex items-center justify-center w-10 h-10 rounded-full "
            >
              <Icons.linkedin />
            </a>
          </div>
        </span>
      </section>

      <section className="flex flex-col items-center gap-4 w-full  text-xl px-4 py-2 lg:justify-center lg:py-3.5 ">
        <div className="flex items-center w-full h-full mx-auto text-sm max-w-screen-2xl">
          <div className="w-full pb-4 border-b-2 border-b-slate-200">
            <h2 className="text-xl font-medium ">
              {main.videoSeries.title} (
              {courseRes.data && courseRes.data.courses.length})
            </h2>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-2xl">
          {courseRes.data &&
            courseRes.data.courses.map((course) => (
              <ProductCard key={course.id} course={course} />
            ))}
        </div>
      </section>
      <section className="flex flex-col items-center w-full gap-4 px-4 py-16 text-xl bg-gray-100 lg:justify-center lg:py-16 ">
        <div className="flex flex-col items-center w-full h-full max-w-screen-xl gap-4 mx-auto text-sm md:gap-16 md:flex-row">
          <div className="flex flex-col self-stretch max-w-2/5 ">
            <span className="text-lg font-semibold">{main.faq.title}</span>
            <span className="text-base ">
              Can't find the answer you're looking for? Reach out to our{" "}
              <span className="text-orange-400">support </span>team.
            </span>
          </div>
          <div className="w-full max-w-3/5 xl:max-w-4/5">
            <Accordion type="single" collapsible>
              {faqRes.data?.map((faq, index) => (
                <AccordionItem key={`faq-${index}`} value={`faq-${index}`}>
                  <AccordionTrigger className="text-start">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <span
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></span>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <footer className="w-full py-16 bg-slate-900">
        <Footer footerContent={footerContent}></Footer>
      </footer>
    </div>
  );
}
//

export default App;

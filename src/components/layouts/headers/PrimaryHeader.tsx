import { Menu, Phone } from "lucide-react";

import { Icons } from "@/components/theme/icons";
import DropDownWithIcon from "@/components/ui/DropDownWithIcon";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LanguageMenu, PrimaryMenu, SideBarMenu } from "@/types/Menus";

const PrimaryHeader = ({
  langMenu,
  menuData,
  sidebarData,
}: {
  langMenu: LanguageMenu;
  menuData: PrimaryMenu[];
  sidebarData: SideBarMenu;
}) => {
  return (
    <div className="w-full bg-theme-dark">
      <header className="flex items-center justify-between w-full h-12 mx-auto max-w-screen-2xl text-white/90">
        <nav className="flex items-center w-full h-full px-4 ">
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
                    item.isActive && "bg-theme",
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
                    <div className="flex items-center gap-2 font-medium text-theme">
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
  );
};

export default PrimaryHeader;

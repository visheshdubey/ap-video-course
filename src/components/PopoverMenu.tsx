import { useMemo } from "react";
import { useQuery } from "react-query";

import { api } from "@/api";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tags, TagsRes } from "@/types/api/TagRes";

import { ScrollArea } from "./ui/scroll-area";

export function TagsDropdown() {
  const filterByParent = (data: TagsRes, parentValue: number): Tags[] => {
    const flattenedData = data.flat();
    const filteredItems = flattenedData.filter(
      (item) => item.parent === parentValue
    );
    return filteredItems;
  };

  const tagRes = useQuery(["tags"], () => api.getTags());

  const filteredData = useMemo(() => {
    if (!tagRes?.data) return [];

    return filterByParent(tagRes.data, 0);
  }, [tagRes?.data]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-0 bg-transparent outline-none" asChild>
        <button className="flex items-center pl-2 text-xs font-normal border-r rounded-l whitespace-nowrap">
          <div className="text-xs font-medium text-slate-500">
            <span className="">All</span>
          </div>
          <div className="px-3 text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="6"
              viewBox="0 0 9 6"
              className="fill-current"
            >
              <path d="m.354 1.354 3.792 3.792a.5.5 0 0 0 .708 0l3.792-3.792A.5.5 0 0 0 8.293.5H.707a.5.5 0 0 0-.353.854Z"></path>
            </svg>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col w-56 gap-1">
        <DropdownMenuItem></DropdownMenuItem>
        {filteredData.map((items, index) =>
          items.hasChildren ? (
            <DropdownMenuSub key={index}>
              <DropdownMenuSubTrigger>
                {items.name.english}
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="max-h-[440px]">
                  <ScrollArea className="w-full h-[300px] min-w-[200px]">
                    <div>
                      {tagRes.data &&
                        filterByParent(tagRes?.data, index + 1).map((items) => (
                          <DropdownMenuItem key={items.tagId}>
                            {items.name.english}
                          </DropdownMenuItem>
                        ))}
                    </div>
                  </ScrollArea>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ) : (
            <DropdownMenuItem key={items.tagId}>
              {items.name.english}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import React from "react";

import { cn } from "@/lib/utils";

import { Icons } from "../theme/icons";

const Breadcrumbs = ({ items }: { items: string[] }) => {
  return (
    <div className="flex flex-wrap items-baseline justify-start w-full text-gray-600">
      {items.map((item, index) => (
        <div className="flex items-center">
          <div
            className={cn(
              "mr-1 text-sm cursor-pointer",
              index === items.length - 1
                ? "font-medium font-hindi"
                : " hover:text-theme"
            )}
          >
            <span className="text-theme-gray">{item}</span>
          </div>
          <div
            className={cn(
              "px-1 mr-1 text-gray-subtitle",
              index === items.length - 1 && "hidden"
            )}
          >
            <Icons.greaterThan />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;

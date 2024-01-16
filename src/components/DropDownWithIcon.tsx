import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

import { Icons } from "./icons";

const DropDownWithIcon = ({
  item,
}: {
  item:
    | {
        label: string;
        link: string;
        subMenu?: undefined;
      }
    | {
        label: string;
        subMenu: string[];
        link?: undefined;
      };
}) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <DropdownMenu onOpenChange={(val) => setisOpen(val)}>
      <DropdownMenuTrigger className="outline-none flex items-center gap-2 hover:bg-[#EA580C] h-full px-2">
        {item.label}{" "}
        <span className={cn(isOpen ? "rotate-180" : "")}>
          <Icons.down />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {item.subMenu?.map((subItem, subIndex) => (
          <DropdownMenuItem key={subIndex} className="hover:bg-orange-100">
            {subItem}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownWithIcon;

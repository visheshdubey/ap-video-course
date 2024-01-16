import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { PrimaryMenu } from "@/types/Menus";

import { Icons } from "../theme/icons";

const DropDownWithIcon = ({ item }: { item: PrimaryMenu }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <DropdownMenu onOpenChange={(val) => setisOpen(val)}>
      <DropdownMenuTrigger className="flex items-center h-full gap-2 px-2 outline-none hover:bg-theme">
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

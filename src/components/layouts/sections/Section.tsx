import { ReactNode } from "react";

import { cn } from "@/lib/utils";

const Section = ({
  children,
  className,
  classNameInner,
}: {
  children: ReactNode;
  className?: string;
  classNameInner?: string;
}) => {
  return (
    <section
      className={cn(
        "flex items-center gap-4 w-full  text-xl px-4 py-2 lg:justify-center lg:py-3.5",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center w-full h-full mx-auto text-sm max-w-screen-2xl",
          classNameInner
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;

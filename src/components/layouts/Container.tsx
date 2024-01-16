import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col w-full overflow-clip">
      {children}
    </div>
  );
};

export default Container;

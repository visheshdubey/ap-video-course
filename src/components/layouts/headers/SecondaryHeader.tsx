const SecondaryHeader = ({ msg, href }: { msg: string; href: string }) => {
  return (
    <section className="flex items-center gap-4 w-full bg-theme-gray lg:text-xl text-sm px-4 py-2 justify-between lg:justify-center lg:py-3.5 text-white">
      🔴
      <span>{msg}</span>
      <a
        href={href}
        className="flex text-sm lg:text-base items-center shrink-0 h-fit rounded-md border border-gray-200 px-2 py-1 text-white lg:py-0.75"
      >
        Click Here
      </a>
    </section>
  );
};

export default SecondaryHeader;

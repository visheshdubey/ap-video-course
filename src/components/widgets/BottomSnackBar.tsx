import { cn } from "@/lib/utils";

const BottomSnackBar = ({
  label,
  href,
  className,
}: {
  label: string;
  href: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-orange-200  text-xl font-normal items-center px-4 py-4 w-full flex justify-between",
        className
      )}
    >
      <span className="text-center ">{label}</span>
      <a
        href={href}
        className="px-4 py-2 text-sm text-white rounded-full bg-theme"
      >
        Download App
      </a>
    </div>
  );
};

export default BottomSnackBar;

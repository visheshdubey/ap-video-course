import { capitalizeFirstLetter, convertDecToHHMM } from "@/lib/utils";
import { Course } from "@/types/api/CourseSeriesRes";

const ProductCard = ({ course }: { course: Course }) => {
  return (
    <div
      key={course.id}
      className="flex flex-col w-full gap-2 px-2 py-4 border-b rounded lg:gap-1 lg:p-2 hover:shadow hover:bg-slate-50 font-hindi"
    >
      <div className="flex items-center w-full h-full mx-auto text-sm max-w-screen-2xl">
        <div className="relative px-2 py-1 text-xs text-white rounded-sm min-w-fit ">
          <span className="relative z-50 px-1 font-hindi">
            {"भाग "}
            {course.series.order.seq}
          </span>
          <svg
            className="absolute top-0 left-0 z-0 w-full h-full"
            viewBox="0 0 60 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.62109 0C1.51652 0 0.621094 0.89543 0.621094 2V27.7632C0.621094 28.8678 1.51652 29.7632 2.62109 29.7632H57.6128C57.8288 29.7632 58.0368 29.7289 58.2317 29.6656C59.0737 29.3919 59.1525 28.3361 58.8805 27.4935L55.1062 15.8033C54.9127 15.2041 54.9127 14.5591 55.1062 13.9599L58.8805 2.26968C59.1525 1.42712 59.0737 0.371331 58.2317 0.0975971C58.0368 0.0342432 57.8288 0 57.6128 0H2.62109Z"
              fill="#94A3B8"
            />
          </svg>
        </div>
      </div>
      <span className="text-base font-medium ">{course.title}</span>
      <span className="text-sm text-slate-600">{course.subtitle}</span>
      <span className="font-sans text-sm font-normal">
        {convertDecToHHMM(course.courseHours).hours} hours{" "}
        {convertDecToHHMM(course.courseHours).minutes} minutes
      </span>
      <span className="text-base ">
        <div className="pt-1 text-sm text-gray-600 lg:text-sm">
          <span className="font-en ">Contribution: ₹{course.amount}</span>{" "}
          <del>
            <span className="pl-1">
              <span className="font-hi svelte-t3mcl">
                ₹{course.originalAmount}
              </span>
            </span>
          </del>
        </div>
      </span>
      <span className="px-1.5 py-1 text-xs mt-1.5 bg-blue-200 rounded w-fit">
        {capitalizeFirstLetter(course.language)}
      </span>
      <a
        href={`https://acharyaprashant.org/en/video-modules/module/${course.id}`}
        className="flex gap-2 mt-1.5"
      >
        <span className="text-xs font-medium text-theme">ADD TO CART</span>
        <span className="text-xs font-medium text-theme">|</span>
        <span className="text-xs font-medium text-theme">ENROL</span>
      </a>
    </div>
  );
};

export default ProductCard;

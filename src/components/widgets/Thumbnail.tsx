import React from "react";

const Thumbnail = ({ src }: { src: string }) => {
  return (
    <div className="relative w-full shrink-0 md:w-2/5">
      <img
        className="object-cover w-full h-full rounded aspect-video"
        src={src}
        alt="Thumbnail"
      />
      <div className="absolute bottom-0 left-0 w-full text-base font-semibold text-white align-bottom h-1/3 bg-gradient-to-t from-black">
        <img
          className="absolute object-contain h-14 right-1 bottom-1"
          src="https://acharyaprashant.org/images/ic_apsignature_hindi.png"
          alt="AP Name Logo"
        />
      </div>
    </div>
  );
};

export default Thumbnail;

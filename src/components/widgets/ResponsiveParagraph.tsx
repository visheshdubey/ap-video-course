import { useEffect, useState } from "react";

const ResponsiveParagraph = ({ children }: { children: string }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showFullText, setshowFullText] = useState<boolean | null>(null);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth > 720) setshowFullText(null);
    if (windowWidth < 720) setshowFullText(true);
  }, [windowWidth]);

  function trimParagraph(text: string, maxWords = 42) {
    const words = text.split(" ");
    const trimmedWords = words.slice(0, maxWords);
    const trimmedText = trimmedWords.join(" ");
    return showFullText ? (
      <>
        {trimmedText} ...
        <div
          className="cursor-pointer text-theme"
          onClick={() => setshowFullText(false)}
        >
          और पढ़ें
        </div>
      </>
    ) : (
      <>
        {text}
        {showFullText === false && (
          <div
            className="cursor-pointer text-theme"
            onClick={() => setshowFullText(true)}
          >
            कम दिखाएं
          </div>
        )}
      </>
    );
  }
  return <div>{trimParagraph(children)}</div>;
};

export default ResponsiveParagraph;

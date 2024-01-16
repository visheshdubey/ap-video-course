import { SocialMediaRibbon as SocialMediaRibbonType } from "@/types/SocialMediaRibbon";

const SocialMediaRibbon = ({
  socialMediaShares,
}: {
  socialMediaShares: SocialMediaRibbonType;
}) => {
  return (
    <span className="flex flex-col w-full gap-2 mx-auto text-sm font-medium max-w-screen-2xl">
      Share this series:
      <div className="flex gap-4">
        {socialMediaShares.map((item, index) => (
          <a
            key={`social-media-ribbon-${index}`}
            href=""
            className={item.className}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </span>
  );
};

export default SocialMediaRibbon;

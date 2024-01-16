import { useQuery } from "react-query";

import { api } from "@/api";
import Container from "@/components/layouts/Container";
import Footer from "@/components/layouts/footer/Footer";
import PrimaryHeader from "@/components/layouts/headers/PrimaryHeader";
import SecondaryHeader from "@/components/layouts/headers/SecondaryHeader";
import SnackbarHeader from "@/components/layouts/headers/SnackbarHeader";
import Section from "@/components/layouts/sections/Section";
import BottomSnackBar from "@/components/widgets/BottomSnackBar";
import Breadcrumbs from "@/components/widgets/Breadcrumbs";
import Faqs from "@/components/widgets/Faqs";
import ProductCard from "@/components/widgets/ProductCard";
import ResponsiveParagraph from "@/components/widgets/ResponsiveParagraph";
import SocialMediaRibbon from "@/components/widgets/SocialMediaRibbon";
import Thumbnail from "@/components/widgets/Thumbnail";
import { downloadAppSnackbar } from "@/content/downloadApp";
import { footer as footerContent } from "@/content/footer";
import { main } from "@/content/main";
import { langMenu, menuData, sidebarData } from "@/content/menus";

const VideoCourse = () => {
  const courseRes = useQuery(["courses"], () => api.getCourses());
  const faqRes = useQuery(["faqs"], () => api.getFaqs());

  return (
    <Container>
      <PrimaryHeader
        langMenu={langMenu}
        menuData={menuData}
        sidebarData={sidebarData}
      ></PrimaryHeader>
      <SecondaryHeader msg={main.headerSnackBar} href="#" />
      <SnackbarHeader />
      <Section>
        <Breadcrumbs items={main.breadcrumbs}></Breadcrumbs>
      </Section>
      <Section classNameInner="flex-col gap-4">
        <span className="self-start w-full mx-auto font-medium font-hindi max-w-screen-2xl lg:text-2xl">
          {main.hero.title}
        </span>
        <div className="flex flex-col items-center w-full h-full gap-4 mx-auto text-sm md:flex-row max-w-screen-2xl">
          <Thumbnail src={main.hero.thumbnail}></Thumbnail>
          <div className="flex flex-col self-stretch h-full text-sm md:pl-4 md:pt-0">
            <span className="text-lg font-medium font-hindi">
              {main.hero.heading}
            </span>
            <span className="text-base leading-relaxed tracking-wide text-gray-600 font-hindi">
              <ResponsiveParagraph>{main.hero.paragraph}</ResponsiveParagraph>
            </span>
          </div>
        </div>
        <SocialMediaRibbon socialMediaShares={main.hero.socialLinks} />
      </Section>
      <Section classNameInner="flex-col gap-4">
        <div className="w-full pb-4 border-b-2 border-b-slate-200">
          <h2 className="text-xl font-medium ">
            {main.videoSeries.title} (
            {courseRes.data && courseRes.data.courses.length})
          </h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-2xl">
          {courseRes.data &&
            courseRes.data.courses.map((course) => (
              <ProductCard key={course.id} course={course} />
            ))}
        </div>
      </Section>
      <Section
        className=" bg-gray-50"
        classNameInner="flex-col py-8 md:p-8 max-w-screen-xl gap-4 md:gap-16 px-4 md:gap-16 md:flex-row"
      >
        <div className="flex flex-col self-stretch max-w-2/5 ">
          <span className="text-lg font-semibold">{main.faq.title}</span>
          <span className="text-base ">
            Can't find the answer you're looking for? Reach out to our{" "}
            <span className="text-theme">support </span>team.
          </span>
        </div>
        <Faqs faqData={faqRes.data} className="" />
      </Section>
      <footer className="w-full py-8 pb-24 sm:pb-7 bg-slate-900">
        <Footer footerContent={footerContent}></Footer>
      </footer>
      <BottomSnackBar
        className="fixed bottom-0 z-50 flex sm:hidden"
        href={downloadAppSnackbar.href}
        label={downloadAppSnackbar.label}
      />
    </Container>
  );
};

export default VideoCourse;

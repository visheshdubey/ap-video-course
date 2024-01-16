import { cn } from "@/lib/utils";
import { FAQRes } from "@/types/api/FAQRes";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Faqs = ({
  faqData,
  className,
}: {
  faqData?: FAQRes;
  className?: string;
}) => {
  return (
    <div className={cn("w-full max-w-3/5 xl:max-w-4/5 ", className)}>
      <Accordion type="single" collapsible>
        {faqData?.map((faq, index) => (
          <AccordionItem key={`faq-${index}`} value={`faq-${index}`}>
            <AccordionTrigger className="text-start">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <span dangerouslySetInnerHTML={{ __html: faq.answer }}></span>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faqs;

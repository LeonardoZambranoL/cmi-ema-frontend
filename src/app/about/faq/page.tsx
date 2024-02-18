import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFAQ } from "@/lib/utils";
import SmallHeader from "@/components/Headers/SmallHeader";
import BigHeader from "@/components/Headers/BigHeader";

export default function Page() {
  const faqTitle = "Preguntas frecuentes";
  const faqs = getFAQ();
  return (
    <div className="container items-start mb-10 md:mt-5">
      <div className="container flex flex-col items-center text-center w-full">
        <BigHeader> {faqTitle} </BigHeader>
      </div>
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((faq, index) => (
          <AccordionItem value={String(index)} key={index}>
            <AccordionTrigger>
              <SmallHeader> {faq.question} </SmallHeader>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mx-2">
                <span className="md:text-base lg:text-lg whitespace-pre-line">
                  {faq.answer}
                </span>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

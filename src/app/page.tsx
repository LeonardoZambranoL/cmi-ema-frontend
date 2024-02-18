import TwoLinkButtons from "@/components/Buttons/TwoLinkButtons";
import BigHeader from "@/components/Headers/BigHeader";
import MediumHeader from "@/components/Headers/MediumHeader";
import SmallHeader from "@/components/Headers/SmallHeader";
import Logo from "@/components/Logo";
import MutedParagraph from "@/components/Paragraph/MutedParagraph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFAQ } from "@/lib/utils";

export default function Home() {
  const title = "Competencia Matemática Intercolegial CMI 2024";
  const paragraph =
    "¡Bienvenidos a la Competencia Matemática Intercolegial CMI 2024! Este año, nuestra edición anual se enorgullece de acoger a un mayor número de países, colegios y participantes.";

  const faqTitle = "Preguntas frecuentes";
  const faqs = getFAQ();
  const inscribete = (
    <TwoLinkButtons
      callToActionContent="Inscríbete"
      otherContent="Más infos"
      callToActionLink="/auth/signup"
      otherLink="/about"
    ></TwoLinkButtons>
  );
  //md:mt-7 lg:mt-12
  return (
    <>
      <div className="flex flex-col gap-16">
        <div className="w-full flex flex-col items-center gap-4 text-center">
          <Logo dimension={100} className="" />
          <div className="container flex flex-col items-center text-center w-full">
            <BigHeader> {title} </BigHeader>
          </div>
          <div className="container flex flex-col items-center text-center md:w-9/12 lg:w-6/12">
            <MutedParagraph> {paragraph} </MutedParagraph>
          </div>
          <div>{inscribete}</div>
        </div>
        <div className="container items-start mb-10 md:mt-5">
          <div className="container flex flex-col items-center text-center w-full">
            <MediumHeader> {faqTitle} </MediumHeader>
          </div>
          <Accordion type="single" collapsible>
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
      </div>
    </>
  );
}

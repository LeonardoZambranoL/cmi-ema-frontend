import TwoLinkButtons from "@/components/Buttons/TwoLinkButtons";
import BigHeader from "@/components/Headers/BigHeader";
import MediumHeader from "@/components/Headers/MediumHeader";
import SmallHeader from "@/components/Headers/SmallHeader";
import { Logo } from "@/components/Logo";
import MutedParagraph from "@/components/Paragraph/MutedParagraph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQType } from "./types";

export default function Home() {
  const title = "I REALLY DO NOT NOT NOT NOT DO NOT KNOW WHAT TO DO!";
  const paragraph =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea";
  const faqs: FAQType[] = [
    {
      question: "Paises participantes",
      answer: "Ecuador\nBolivia\nRepublica dominicana\nFriends",
    },
    {
      question: "Que andas pregunton hoydia?",
      answer:
        "Asi parece\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    },
    {
      question: "Que te cuento? Que te cuento?",
      answer:
        "Un cuento\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      question: "Ya pues que quieres?",
      answer:
        "No se\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,",
    },
  ];
  const inscribete = (
    <TwoLinkButtons
      callToActionContent="Inscribete"
      otherContent="Más infos"
      callToActionLink="/auth/signin"
      otherLink="/about"
    ></TwoLinkButtons>
  );
  //md:mt-7 lg:mt-12
  return (
    <>
      <div className="flex flex-col gap-16">
        <div className="w-full flex flex-col items-center gap-4 text-center">
          <Logo dimension={100} className="" />
          <BigHeader> {title} </BigHeader>
          <MutedParagraph> {paragraph} </MutedParagraph>
          <div>{inscribete}</div>
        </div>
        <div className="container items-start md:mt-5">
          <MediumHeader> FAQ </MediumHeader>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem value={String(index)} key={index}>
                <AccordionTrigger>
                  <div className="w-full md:w-auto">
                    <SmallHeader> {faq.question} </SmallHeader>
                  </div>
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

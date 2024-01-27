import TwoLinkButtons from "@/components/Buttons/TwoLinkButtons";
import BigHeader from "@/components/Headers/BigHeader";
import MediumHeader from "@/components/Headers/MediumHeader";
import SmallHeader from "@/components/Headers/SmallHeader";
import { Logo } from "@/components/Logo";
import MutedList from "@/components/Paragraph/MutedList";
import MutedParagraph from "@/components/Paragraph/MutedParagraph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const title = "I REALLY DO NOT NOT NOT NOT DO NOT KNOW WHAT TO DO!";
  const paragraph = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea`;
  const callToActionButtonText = "Inscribete";
  const otherButtonText = "CHCH AAAAAAAAAAAAAAH";
  const inscribete = (
    <TwoLinkButtons
      callToActionContent={callToActionButtonText}
      otherContent={otherButtonText}
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
          <BigHeader content={title} />
          <MutedParagraph content={paragraph} />
          {inscribete}
        </div>
        <div className="container items-start">
          <MediumHeader content="FAQ" />
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="w-full md:w-auto">
                  <SmallHeader content="Paises participantes" />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <MutedList />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="w-full md:w-auto">
                  <SmallHeader content="Que andas pregunton hoydia?" />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <span className="md:text-base lg:text-lg">
                  Asi parece <br /> Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam
                </span>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="w-full md:w-auto">
                  <SmallHeader content="Que te cuento? Que te cuento?" />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <span className="md:text-base lg:text-lg">
                  Un cuento <br /> Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet.
                </span>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="w-full md:w-auto">
                  <SmallHeader content="Ya pues que quieres?" />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <span className="md:text-base lg:text-lg">
                  <b>No se</b> <br /> Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Duis autem vel eum iriure dolor in hendrerit
                  in vulputate velit esse molestie consequat, vel illum dolore
                  eu feugiat nulla facilisis at vero eros et accumsan et iusto
                  odio dignissim qui blandit praesent luptatum zzril delenit
                  augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor
                  sit amet,
                </span>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}

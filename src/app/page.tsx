import TwoLinkButtons from "@/components/Buttons/TwoLinkButtons";
import VoidPrimaryButton from "@/components/Buttons/VoidPrimaryButton";
import VoidSecondaryButton from "@/components/Buttons/VoidSecondaryButton";
import BigHeader from "@/components/Headers/BigHeader";
import Logo from "@/components/Logo";
import MutedParagraph from "@/components/Paragraph/MutedParagraph";
import { getFAQ } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  const title = "Competencia Matemática\nIntercolegial CMI 2024";
  const paragraph =
    "¡Bienvenidos a la Competencia Matemática Intercolegial CMI 2024! Este año, nuestra edición anual se enorgullece de acoger a un mayor número de países, colegios y participantes.";

  const inscribete = (
    <TwoLinkButtons
      callToActionContent="Inscríbete"
      otherContent="Más infos"
      callToActionLink="/auth/signup"
      otherLink="/about"
    ></TwoLinkButtons>
  );
  return (
    <>
      <div>
        <div className="flex flex-col gap-16 my-16">
          <div className="w-full flex flex-col items-center gap-4 text-center">
            <Logo dimension={100} className="" />
            <div className="container flex flex-col items-center text-center w-full">
              <BigHeader> {title} </BigHeader>
            </div>
            <div className="container flex flex-col items-center text-center md:w-9/12 lg:w-6/12">
              <MutedParagraph> {paragraph} </MutedParagraph>
            </div>
            <div>{inscribete}</div>
            <div className="container flex flex-col items-center text-center md:w-9/12 lg:w-6/12">
              <Link href="/about/faq" className="w-full">
                <VoidSecondaryButton>Preguntas frecuentes</VoidSecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import BigHeader from "@/components/Headers/BigHeader";
import StandardParagraph from "@/components/Paragraph/StandardParagraph";
import fondo from "@/../public/fondo.png";
import Image from "next/image";
import Link from "next/link";
import VoidSecondaryButton from "@/components/Buttons/VoidSecondaryButton";
import SmallHeader from "@/components/Headers/SmallHeader";

export default function Page() {
  return (
    <div className="container">
      <div className="container mx-auto max-w-screen-lg px-4 py-8">
        <div className="text-center">
          <BigHeader>Competencia de Matemáticas Intercolegial</BigHeader>
        </div>

        <div className="my-10 flex flex-col gap-5">
          <StandardParagraph>
            La Competencia de Matemáticas Intercolegial (CMI) es una olimpiada
            dirigida a estudiantes de escuelas y colegios que se encuentran en
            sus últimos 6 años de educación preuniversitaria. Esta competencia
            es organizada anualmente por el equipo que representa a Ecuador en
            la Olimpiada Internacional de Matemáticas&nbsp;
            <a
              href="https://www.imo-official.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              IMO
            </a>
            .
          </StandardParagraph>

          <div className="flex justify-center">
            <Image
              src={fondo}
              height={fondo.height / 3}
              width={fondo.width / 3}
              alt="CMI"
            />
          </div>

          <StandardParagraph>
            La CMI tuvo sus inicios como un proyecto local en el 2020 en
            Guayaquil, Ecuador, con el propósito de ofrecer a los estudiantes de
            esta región la oportunidad de participar en una Olimpiada durante
            tiempos dificiles y de muy limitada movilidad en el país. Desde
            entonces, ha evolucionado y ahora se ha convertido en una
            competencia internacional con la participación de colegios y
            estudiantes de diversos países.
          </StandardParagraph>

          <StandardParagraph>
            El objetivo principal de la CMI es facilitar el acceso a las
            matemáticas y brindar a los estudiantes más oportunidades de
            competir en olimpiadas de esta disciplina, incluyendo la
            representación a nivel internacional en nombre de sus colegios y
            países.
          </StandardParagraph>

          <div className="mt-12">
            <Link href="/about/faq" className="w-full">
              <VoidSecondaryButton>
                <SmallHeader>Preguntas frecuentes</SmallHeader>
              </VoidSecondaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

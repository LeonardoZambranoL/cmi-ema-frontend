import BigHeader from "@/components/Headers/BigHeader";
import RessourcesCard from "@/components/Cards/RessourcesCard";
import { getBookRessources, getWebRessources } from "@/lib/utils";
import { RessourceType } from "@/types";
import MutedParagraph from "@/components/Paragraph/MutedParagraph";
import MediumHeader from "@/components/Headers/MediumHeader";
import MailTo from "@/components/Contact/MailTo";

export default function Page() {
  const webResources = getWebRessources();
  const bookResources = getBookRessources();
  const mailtoSubject = "Recomendación para materiales de entrenamiento | RME";
  const mailtoBody = `Hola!\n\n• Recomiendo el siguiente material:\n• Autor/Organización:\n• Link al material:\n• El material es gratuito (Si/No):\n\nSi tienes comentarios sobre el material o quisieras contarnos algo más al respecto siéntete libre de hacerlo!`;

  return (
    <>
      <div className="w-full mb-10">
        <div className="w-full flex flex-col gap-5">
          <div className="container flex flex-col items-center text-center w-full">
            <BigHeader>Recursos de entrenamiento</BigHeader>
          </div>
          <div className="container flex flex-col items-center text-center md:w-9/12 lg:w-6/12">
            <MutedParagraph>
              Entrenar para olimpiadas no es algo sencillo, por lo que te
              dejamos una guía para que practiques, incluyendo libros y
              colecciones de concursos.
            </MutedParagraph>
          </div>
          <div className="container">
            <div>
              <div className="p-5 flex flex-wrap gap-10 mt-4 justify-center">
                <div className="underline">
                  <MediumHeader>Recursos en Linea</MediumHeader>
                </div>
                <div className="flex flex-wrap gap-10 mt-4 justify-center">
                  {webResources.map((r: RessourceType, index: number) => (
                    <div key={index}>
                      <RessourcesCard
                        title={r.title}
                        description={r.description}
                        content={r.content}
                        link={r.link}
                        free={r.free}
                      ></RessourcesCard>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 flex flex-wrap gap-10 mt-4 justify-center">
                <div className="underline">
                  <MediumHeader>Libros</MediumHeader>
                </div>
                <div className="flex flex-wrap gap-10 mt-4 justify-center">
                  {bookResources.map((r: RessourceType, index: number) => (
                    <div key={index}>
                      <RessourcesCard
                        title={r.title}
                        description={r.description}
                        content={r.content}
                        link={r.link}
                        free={r.free}
                      ></RessourcesCard>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 ml-10">
                <MutedParagraph>
                  Queremos hacer la matemática accesible para todos. Si conoces
                  material de entrenamiento gratuito y deseas compartirlo,
                  envianos un correo electrónico a&nbsp;
                  <MailTo subject={mailtoSubject} body={mailtoBody} />
                  &nbsp;para publicarlo aquí y ampliar nuestra biblioteca.
                  ¡Apreciamos tu aporte!
                </MutedParagraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

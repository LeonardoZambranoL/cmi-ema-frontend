import BigHeader from "@/components/Headers/BigHeader";
import RessourcesCard from "@/components/Cards/RessourcesCard";
import { getBookRessources, getWebRessources } from "@/lib/utils";
import { RessourceType } from "@/types";
import MutedParagraph from "@/components/Paragraph/MutedParagraph";
import MediumHeader from "@/components/Headers/MediumHeader";

export default function Page() {
  const webResources = getWebRessources();
  const bookResources = getBookRessources();
  return (
    <>
      <div className="w-full">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

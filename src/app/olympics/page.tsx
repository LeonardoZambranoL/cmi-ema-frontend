import ThumbnailCard from "@/components/Cards/ThumbnailCard";
import BigHeader from "@/components/Headers/BigHeader";
import MediumHeader from "@/components/Headers/MediumHeader";
import MutedParagraph from "@/components/Paragraph/MutedParagraph";

export default function Page() {
  return (
    <>
      <div className="w-full mb-12">
        <div className="w-full flex flex-col gap-5">
          <div className="container flex flex-col items-center text-center w-full">
            <BigHeader>Compendio de Eventos</BigHeader>
          </div>
          <div className="container">
            <div>
              <div className="p-5 flex flex-wrap gap-10 mt-4 justify-center">
                <div className="flex flex-wrap gap-10 mt-4 justify-center max-w-screen">
                  <ThumbnailCard
                    title="CMI PRIMERA EDICIÓN"
                    imageSrc="/fondo2.png"
                    link="/olympics/CMI1"
                  ></ThumbnailCard>
                  <ThumbnailCard
                    title="CMI SEGUNDA EDICIÓN"
                    imageSrc="/fondo.png"
                    link="/olympics/CMI2"
                  ></ThumbnailCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

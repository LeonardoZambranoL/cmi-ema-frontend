import { getContactEmail, getContactPhone } from "@/lib/contact/utils";
import MediumHeader from "@/components/Headers/MediumHeader";
import StandardParagraph from "@/components/Paragraph/StandardParagraph";
import MailTo from "@/components/Contact/MailTo";

export default function Page() {
  const contactPhone = getContactPhone();
  return (
    <div className="container mb-20">
      <div className="container mx-auto max-w-screen-lg px-4 py-8">
        <div className="text-center">
          <MediumHeader>Información de contacto</MediumHeader>
        </div>

        <div className="my-10 flex flex-col items-center">
          <StandardParagraph>
            Si tienes alguna duda, pregunta, recomendación o comentario
            relacionado con la olimpiada o temas similares, no dudes en
            escribir un correo electrónico a <MailTo subject="" body="" /> o
            contactarnos al número&nbsp;
            <span className="font-semibold">{contactPhone}</span>.
          </StandardParagraph>
        </div>
      </div>
    </div>
  );
}

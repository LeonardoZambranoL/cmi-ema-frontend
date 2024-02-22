import BigHeader from "@/components/Headers/BigHeader";
import StandardParagraph from "@/components/Paragraph/StandardParagraph";

export default function Page() {
  return (
    <div className="container">
      <div className="container mx-auto max-w-screen-lg px-4 py-8">
        <div className="text-center">
          <BigHeader>CMI SEGUNDA EDICIÓN</BigHeader>
        </div>

        <div className="my-10 flex flex-col gap-5">
          <StandardParagraph>
            Toca pensar q redactar, al rato pongo la leaderboard&nbsp;.
          </StandardParagraph>
        </div>
      </div>
    </div>
  );
}

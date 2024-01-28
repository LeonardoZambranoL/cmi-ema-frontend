import BigHeader from "@/components/Headers/BigHeader";
import MutedParagraph from "@/components/Paragraph/MutedParagraph";

export default function Page() {
  return (
    <>
      <BigHeader>Hey, I just met you, and this is crazy</BigHeader>
      <div className="mt-5">
        <MutedParagraph> But here&#39;s my number (+49 176 ********), so <b><u>call me</u></b>, maybe. </MutedParagraph>
      </div>
    </>
  );
}

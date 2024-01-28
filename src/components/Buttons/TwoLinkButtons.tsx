import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  callToActionContent: string;
  otherContent: string;
  callToActionLink: string;
  otherLink: string;
};

export default function TwoLinkButtons({
  callToActionContent,
  otherContent,
  callToActionLink,
  otherLink,
}: Props) {
  return (
    <div className="mt-2 flex flex-row gap-4 max-w-full">
      <Link href={callToActionLink} className="w-2/3">
        <Button className="bg-background hover:bg-secondary border-solid border-2 border-primary text-primary font-semibold py-6 w-full min-w-32">
          <span className="">{callToActionContent}</span>
        </Button>
      </Link>
      <Link href={otherLink} className="w-1/3">
        <Button className="bg-primary hover:bg-primary/70 text-secondary font-semibold py-6 w-full min-w-24">
          <span className="p-5">{otherContent}</span>
        </Button>
      </Link>
    </div>
  );
}

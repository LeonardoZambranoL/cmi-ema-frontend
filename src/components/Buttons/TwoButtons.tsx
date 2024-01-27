import { Button } from "@/components/ui/button";

type Props = {
  callToActionContent: string;
  otherContent: string;
};

export default function TwoButtons({
  callToActionContent,
  otherContent,
}: Props) {
  return (
    <div className="flex flex-row gap-4 max-w-full">
      <Button className="bg-background hover:bg-secondary border-solid border-2 border-primary text-primary font-semibold py-6 w-2/3">
        <span className="truncate">{callToActionContent}</span>
      </Button>
      <Button className="bg-primary text-secondary font-semibold py-6 w-1/3 truncate">
        <span className="truncate">{otherContent}</span>
      </Button>
    </div>
  );
}

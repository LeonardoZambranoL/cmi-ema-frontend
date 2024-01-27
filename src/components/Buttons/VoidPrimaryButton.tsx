
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  content: string;
  voidFunc: () => void;
};

export default function VoidPrimaryButton({
    content,
    voidFunc,
}: Props) {
  return (
    <div className="mt-2 flex flex-row gap-4 w-full">
      <Button className="bg-background hover:bg-secondary border-solid border-2 border-primary text-primary font-semibold py-6 w-full" onClick={voidFunc}>
        <span className="truncate">{content}</span>
      </Button>
    </div>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import VoidSecondaryButton from "../Buttons/VoidSecondaryButton";
import { Badge } from "@/components/ui/badge";

type Props = {
  title: string;
  description: string;
  content: string;
  link: string;
  free: boolean;
};

export default function RessourcesCard({
  title,
  description,
  content,
  link,
  free,
}: Props) {
  return (
    <Card className="w-[380px]">
      <Badge className="mt-1" variant={free ? "default" : "secondary"}>
        {free ? "Gratis" : "Pagado"}
      </Badge>
      <CardHeader className="mt-1">
        <CardTitle className="h-7">{title}</CardTitle>
        <CardDescription className="h-7">
          <span>{description}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 rounded-md border p-4 h-52 overflow-y-auto">
          <span className="whitespace-pre-line">{content}</span>
        </div>
      </CardContent>
      <CardFooter>
        <a
          href={link}
          className="w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VoidSecondaryButton>Acceder</VoidSecondaryButton>
        </a>
      </CardFooter>
    </Card>
  );
}

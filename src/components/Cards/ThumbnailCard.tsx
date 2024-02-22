import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import VoidSecondaryButton from "../Buttons/VoidSecondaryButton";
import Image from "next/image";
import BigHeader from "../Headers/BigHeader";
import MediumHeader from "../Headers/MediumHeader";
import SmallHeader from "../Headers/SmallHeader";
import Link from "next/link";

type Props = {
  title: string;
  description?: string;
  link: string;
  imageSrc: string;
};

export default function ThumbnailCard({
  title,
  description,
  link,
  imageSrc,
}: Props) {
  return (
    <Card className="w-[380px] max-w-xs md:max-w-full">
      <CardContent className="mt-5">
        <div className="flex rounded-md border h-52 relative">
          <Image src={imageSrc} alt="CMI" fill={true} />
        </div>
      </CardContent>
      <CardHeader className="mt-1">
        <CardTitle className="h-7">
          <div className="w-full flex justify-center">
            <SmallHeader>{title}</SmallHeader>
          </div>
        </CardTitle>
        <CardDescription className="h-7">
          <span>{description}</span>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <a
          href={link}
          className="w-full"
          rel="noopener noreferrer"
        >
          <VoidSecondaryButton>Explorar</VoidSecondaryButton>
        </a>
      </CardFooter>
    </Card>
  );
}

'use client';
import VoidPrimaryButton from "@/components/Buttons/VoidPrimaryButton";
import MediumHeader from "@/components/Headers/MediumHeader";
import SmallHeader from "@/components/Headers/SmallHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

export default function Page() {
  const { toast } = useToast();
  const submitHandler = () => {
    console.log("yes?");
    toast({
      title: "Revisa tu correo!",
      description: "Te hemos enviado información para completar tu proceso de inscripción.",
    });
  };
  return (
    <div className="ml-2 mr-2 md:grid md:grid-cols-12">
      <div className="md:col-span-2 lg:col-span-4" />
      <div className="sm:col-span-10 md:col-span-8 lg:col-span-4 my-40">
        <div className="" />
        <Card>
          <CardHeader>
            <CardTitle>
              <MediumHeader content="Ya pues registrate." />
            </CardTitle>
            <CardDescription>
              <SmallHeader content="Cual es pues cual es?" />
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-10">
            <Input type="email" placeholder="ema@ema.com" />
          </CardContent>
          <CardFooter className="w-full flex flex-row justify-center">
            <div className="w-full lg:w-7/12">
              <VoidPrimaryButton
                content="DAALEE"
                voidFunc={submitHandler}
              />
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

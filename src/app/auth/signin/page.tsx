"use client";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import AfterSignUp from "@/components/Auth/AfterSignUp";

export default function Page() {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    console.log("AQUI FALTA ALGO!");
    setEmailSent(true);
  };
  const formHeaderContent = "Registrate";
  const formSubHeaderContent = "A la CMI 2024";
  const formButtonContent = "Enviar!";
  const alertDialogHeaderContent = "Te hemos enviado un correo.";
  function getalertDialogContent() {
    return `Instrucciones para completar tu proceso de\ninscripción han sido enviadas a ${email}.`;
  }
  const alertDialogActionContent = "OK";

  const afterAllPage =  AfterSignUp();

  const emailForm = (
    <Card className={`rounded-none ${emailSent ? "hidden" : "block"}`}>
      <div className="grid grid-cols-12">
        <div className="bg-[url('/orange_bg.png')] col-span-2 md:col-span-3"></div>
        <div className="col-span-10 md:col-span-9">
          <CardHeader>
            <CardTitle>
              <MediumHeader>{formHeaderContent}</MediumHeader>
            </CardTitle>
            <CardDescription>
              <span className="w-full flex flex-row justify-center">
                <SmallHeader>{formSubHeaderContent}</SmallHeader>
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-10">
            <div className="flex flex-row justify-center">
              <Input
                type="email"
                placeholder="ema@ema.com"
                onChange={(e) => setEmail(e.target.value)}
                className="w-4/5 md:w-3/5"
              />
            </div>
          </CardContent>
          <CardFooter className="w-full flex flex-row justify-center">
            <AlertDialog>
              <AlertDialogTrigger
                onClick={handleSubmit}
                className="bg-background hover:bg-secondary border-solid border-2 border-primary text-primary font-semibold py-3 rounded-lg mt-2 w-4/5 md:w-3/5"
              >
                {formButtonContent}
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <SmallHeader>{alertDialogHeaderContent}</SmallHeader>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {getalertDialogContent()}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>
                    {alertDialogActionContent}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
  return (
    <div className="ml-3 mr-3 md:grid md:grid-cols-12">
      <div className="md:col-span-2 lg:col-span-4" />
      <div className="sm:col-span-10 md:col-span-8 lg:col-span-4 my-40">
        {!emailSent && afterAllPage}
        {emailSent && emailForm}
      </div>
    </div>
  );
}

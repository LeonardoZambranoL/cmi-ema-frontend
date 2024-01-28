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
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/Logo";
import BigHeader from "@/components/Headers/BigHeader";

export default function Page() {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    console.log("AQUI FALTA ALGO!");
    setEmailSent(true);
  };
  return (
    <div className="ml-2 mr-2 md:grid md:grid-cols-12">
      <div className="md:col-span-2 lg:col-span-4" />
      <div className="sm:col-span-10 md:col-span-8 lg:col-span-4 my-40">
        <div className={!emailSent ? "hidden" : "container"}>
          <div className="w-full flex flex-row justify-center">
            <Logo dimension={150} className="" />
          </div>
          <div>
            <BigHeader> Revisa tu correo!</BigHeader>
          </div>
        </div>
        <div>
          <Card className={emailSent ? "hidden" : "block"}>
            <CardHeader>
              <CardTitle>
                <MediumHeader>Ya pues registrate.</MediumHeader>
              </CardTitle>
              <CardDescription>
                <span className="w-full flex flex-row justify-center">
                  <SmallHeader>Cual es pues cual es?</SmallHeader>
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-10">
              <Input
                type="email"
                placeholder="ema@ema.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </CardContent>
            <CardFooter className="w-full flex flex-row justify-center">
              <AlertDialog>
                <AlertDialogTrigger
                  onClick={handleSubmit}
                  className="bg-background hover:bg-secondary border-solid border-2 border-primary text-primary font-semibold py-3 rounded-lg mt-2 w-full md:w-3/5"
                >
                  DALEE
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      <SmallHeader>Te hemos enviado un correo.</SmallHeader>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Instrucciones sobre como completar tu proceso de
                      inscripción han sido enviadas a&nbsp;
                      <u>
                        <b>{email}</b>
                      </u>
                      .
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction>OK</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

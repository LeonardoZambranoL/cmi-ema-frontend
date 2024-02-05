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
import { ReactNode, useState } from "react";
import Logo from "@/components/Logo";
import BigHeader from "@/components/Headers/BigHeader";
import VoidPrimaryButton from "@/components/Buttons/VoidPrimaryButton";
import SignupForm from "@/components/forms/signupForm";

export default function Page() {
  const [start, setStart] = useState(false);
  const formHeaderContent = "Registrate";
  const formSubHeaderContent = "A la CMI 2024";
  const formButtonContent = "Enviar!";
  const alertDialogHeaderContent = "Te hemos enviado un correo.";
  const postRegistrationHeaderContent = "Revisa tu correo!";

  function handleStart() {
    setStart(true);
  }

  const alertDialogActionContent = "OK";

  const afterAllPage = (
    <div>
      <div className="w-full flex flex-row justify-center">
        <Logo dimension={150} className="" />
      </div>
      <div>
        <BigHeader>{postRegistrationHeaderContent}</BigHeader>
      </div>
    </div>
  );

  const startPage = (
    <>
      <div className="ml-3 mr-3 md:grid md:grid-cols-12">
        <div className="md:col-span-2 lg:col-span-4" />
        <div className="sm:col-span-10 md:col-span-8 lg:col-span-4 my-48">
          <Card className={`rounded-none`}>
            <div className="grid grid-cols-12">
              <div className="bg-[url('/bgOrange.png')] col-span-2 md:col-span-3"></div>
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
                <CardFooter className="w-full flex flex-row justify-center">
                  <VoidPrimaryButton
                    voidFunc={handleStart}
                    className="font-semibold rounded-lg mt-2 w-4/5 md:w-3/5"
                  >
                    Empezar
                  </VoidPrimaryButton>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );

  const formPage = (
    <>
      <div className="ml-3 mr-3 md:grid md:grid-cols-12">
        <div className="md:col-span-2 lg:col-span-4" />
        <div className="sm:col-span-10 md:col-span-8 lg:col-span-4 my-48">
          <Card className={`rounded-none`}>
            <div className="grid grid-cols-12">
              <div className="bg-[url('/bgOrangeRotate.png')] col-span-1"></div>
              <div className="col-span-10">
                <CardHeader>
                  <CardTitle>
                    <MediumHeader>Formulario</MediumHeader>
                  </CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-10">
                  <SignupForm />
                </CardContent>
                <CardFooter className="w-full flex flex-row justify-center"></CardFooter>
              </div>
              <div className="bg-[url('/bgOrangeRotate.png')] rotate-180 col-span-1"></div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );

  return <>{!start ? startPage : formPage}</>;
}

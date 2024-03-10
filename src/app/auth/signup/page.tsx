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
import VoidPrimaryButton from "@/components/Buttons/VoidPrimaryButton";
import axios from "axios";
import Link from "next/link";

export default async function Page() {
  const formHeaderContent = "Registrate";
  const formSubHeaderContent = "A la CMI 2024";
  const startPage = (
    <>
      <div className="ml-3 mr-3 md:grid md:grid-cols-12">
        <div className="md:col-span-2 lg:col-span-3 xl:col-span-4" />
        <div className="md:col-span-8 lg:col-span-6 xl:col-span-4 my-64">
          <Card className="rounded-none border-hidden md:border-solid">
            <div className="grid grid-cols-12">
              <div className="bg-[url('/bgOrange.png')] col-span-3"></div>
              <div className="col-span-9">
                <CardHeader>
                  <CardTitle>
                    <div className="container flex flex-col items-center text-center w-full">
                      <MediumHeader>{formHeaderContent}</MediumHeader>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    <span className="w-full flex flex-row justify-center">
                      <SmallHeader>{formSubHeaderContent}</SmallHeader>
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="w-full flex flex-row justify-center">
                  <Link href={"/auth/signup/form"} className="w-full">
                    <VoidPrimaryButton className="font-semibold rounded-lg mt-2 w-4/5 md:w-3/5">
                      Empezar
                    </VoidPrimaryButton>
                  </Link>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );

  return startPage;
}

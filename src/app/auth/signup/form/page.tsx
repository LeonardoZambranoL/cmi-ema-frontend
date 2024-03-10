import MediumHeader from "@/components/Headers/MediumHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignupForm from "@/components/Forms/SignupForm";
import axios from "axios";
import { CountryType, SchoolType } from "@/types";
import { getCountries, getSchools } from "@/lib/utils";

export default async function Page() {
  const countries: CountryType[] = await getCountries();
  const schools: SchoolType[] = await getSchools();
  const formPage = (
    <>
      <div className="ml-3 mr-3 md:grid md:grid-cols-12">
        <div className="md:col-span-2 lg:col-span-3 xl:col-span-4" />
        <div className="md:col-span-8 lg:col-span-6 xl:col-span-4 my-12">
          <Card className="rounded-none border-hidden md:border-solid">
            <div className="grid grid-cols-12">
              <div className="bg-[url('/bgOrangeRotate.png')] col-span-1"></div>
              <div className="col-span-10">
                <CardHeader>
                  <CardTitle>
                    <div className="container flex flex-col items-center text-center w-full">
                      <MediumHeader>Formulario</MediumHeader>
                    </div>
                  </CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-10">
                  <SignupForm countries={countries} schools={schools} />
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

  return formPage;
}

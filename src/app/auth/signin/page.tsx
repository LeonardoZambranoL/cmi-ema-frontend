'use client'
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
import { Input } from "@/components/ui/input";

export default function page() {
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
            <Input type="password" placeholder="Queressapo" />
          </CardContent>
          <CardFooter className="w-full flex flex-row justify-center">
            <div className="w-full lg:w-7/12">
              <VoidPrimaryButton content="DALEE" voidFunc={() => {}} />
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

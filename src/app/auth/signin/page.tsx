import MediumHeader from "@/components/Headers/MediumHeader";
import SmallHeader from "@/components/Headers/SmallHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Props = {
  content: string;
};

export default function page({ content }: Props) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row justify-between">
        <Card className="max-w-50">
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
          <CardFooter>
            <Button className="w-full"><b>Daaaale</b></Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

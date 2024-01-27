import BigHeader from "@/components/Headers/BigHeader";


type Props = {
  content: string;
};

export default function page({ content }: Props) {
  return (
    <>
      <BigHeader content="NO SE QUE PONER AQUI!"/>
    </>
  );
}

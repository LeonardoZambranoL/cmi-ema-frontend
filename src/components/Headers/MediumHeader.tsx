type Props = {
  content: string;
};

export default function MediumHeader({ content }: Props) {
  return (
    <div className="container flex flex-col items-center text-center w-full">
      <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">{content}</h1>
    </div>
  );
}
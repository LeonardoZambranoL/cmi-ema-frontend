type Props = {
  content: string;
};

export default function ParagraphMuted({ content }: Props) {
  return <div className="container flex flex-col items-center text-center md:w-9/12 lg:w-7/12">
      <p className="text-sm md:text-lg lg:text-xl text-muted-foreground">{content}</p>
  </div>;
}

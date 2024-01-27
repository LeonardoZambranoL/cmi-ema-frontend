type Props = {
  content: string;
};

export default function MutedParagraph({ content }: Props) {
  return (
    <div className="container flex flex-col items-center text-center md:w-9/12 lg:w-7/12">
      <span className="text-sm md:text-lg lg:text-xl text-muted-foreground">
        {content}
      </span>
    </div>
  );
}

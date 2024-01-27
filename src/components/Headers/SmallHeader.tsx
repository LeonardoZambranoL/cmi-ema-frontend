type Props = {
  content: string;
};

export default function SmallHeader({ content }: Props) {
  return (
    <div>
      <h1 className="text-center font-bold text-sm md:text-lg lg:text-xl">{content}</h1>
    </div>
  );
}

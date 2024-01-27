type Props = {
  content: string;
};

export default function SmallHeader({ content }: Props) {
  return (
    <span className="flex flex-row justify-center">
      <span className="text-center font-bold text-sm md:text-lg lg:text-xl">{content}</span>
    </span>
  );
}

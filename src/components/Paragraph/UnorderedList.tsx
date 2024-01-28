type Props = {
  content: string[];
};

export default function UnorderedList({ content }: Props) {
  return (
    <div className="flex flex-col text-left md:w-9/12 lg:w-7/12">
      <ul className="list-disc text-sm md:text-lg lg:text-xl">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

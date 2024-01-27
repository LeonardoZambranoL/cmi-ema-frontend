export default function MutedList() {
  const content = ["Pais 1", "Pais 2", "Pais 3", "Pais 4", "Pais 5", "Pais 6"];
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

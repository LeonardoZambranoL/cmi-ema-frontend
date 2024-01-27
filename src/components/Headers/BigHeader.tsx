type Props = {
    content: string;
}

export default function BigHeader({content}: Props) {
    return (
          <div className="container flex flex-col items-center text-center w-full">
            <h1 className="font-bold text-2xl md:text-5xl lg:text-7xl">{content}</h1>
          </div>
    );
  }
  
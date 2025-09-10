import Image from "next/image";

type ListProps = {
  items: string[];
};

export default function Technologies({ items }: ListProps) {
  return (
    <>
      <div className="flex space-x-2 my-2 md:my-0 md:space-x-4">
        {items.map((item, index) => (
          <Image
            key={index}
            src={`${item}.svg`}
            alt={`${item} icon`}
            width={40}
            height={40}
            className="hover:scale-110 transition-transform duration-200 ease-out w-1/5 h-1/5 md:w-10 md:h-10"
          ></Image>
        ))}
      </div>
    </>
  );
}

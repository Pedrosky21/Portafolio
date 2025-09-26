import { technologyIcons } from "@/data/technologies-icons";

type ListProps = {
  items: string[];
};

export default function Technologies({ items }: ListProps) {
  return (
    <>
      <div className="my-2 flex align-middle space-x-2 md:my-0 md:space-x-4">
        {items.map(
          (tech, index) =>
            technologyIcons[tech] && (
              <div
                key={index}
                className="flex items-center text-light-violet h-1/5 w-1/5 md:h-10 md:w-10"
              >
                {technologyIcons[tech]}
              </div>
            )
        )}
      </div>
    </>
  );
}

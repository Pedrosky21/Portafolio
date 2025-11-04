// TechIcon.tsx
import React from "react";

interface TechIconProps {
  name: string;
  children: React.ReactNode;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, children }) => {
  return (
    <div className="w-10 h-10 relative inline-flex justify-center items-center">
      <div className="peer w-full h-full">{children}</div>
      <span
        className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2
                   px-2 py-1 text-sm text-white bg-pink-600 rounded opacity-0 
                   peer-hover:opacity-100 transition-opacity
                   whitespace-nowrap pointer-events-none"
      >
        {name}
      </span>
    </div>
  );
};

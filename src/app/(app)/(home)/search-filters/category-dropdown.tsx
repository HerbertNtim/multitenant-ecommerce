"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category } from "@/payload-types";
import { useRef, useState } from "react";

interface CategoryDropdownProps {
  category: Category;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

const CategoryDropdown = ({
  category,
  isActive,
  isNavigationHovered,
}: CategoryDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    setIsOpen(true);
  };
  const onMouseLeave = () => {
    setIsOpen(false);
  };


  return (
    <div
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative"
    >
      <div className="relative">
        <Button
          variant={"elevated"}
          className={cn(
            `h-11 rounded-2xl text-black hover:bg- bg-${category.color} border-black/50 hover:border-primary`,
            isActive && !isNavigationHovered && `bg-${category.color}`
          )}
        >
          {category.name}
        </Button>
        {Array.isArray(category.subcategories) && category.subcategories?.length > 0 && (
          <div className={cn(`opacity-0 absolute -bottom-3
            w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-black left-1/2 -translate-x-1/2`, isOpen && "opacity-100")} />
        )}
      </div>
    </div>
  );
};

export default CategoryDropdown;

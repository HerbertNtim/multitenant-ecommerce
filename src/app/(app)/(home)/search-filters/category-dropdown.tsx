import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category } from "@/payload-types";

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
  return (
    <Button
      variant={"elevated"}
      className={cn(
        `h-11 rounded-2xl text-black hover:bg-${category.color} bg-transparent border-transparent hover:border-primary`,
        isActive && !isNavigationHovered && `bg-${category.color}`
      )}
    >
      {category.name}
    </Button>
  );
};

export default CategoryDropdown;

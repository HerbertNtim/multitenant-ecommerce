import { Category } from "@/payload-types";
import { Link } from "lucide-react";

interface SubcategoryMenuProps {
  category: Category;
  isOpen: boolean;
  position: {
    top: number;
    left: number;
  };
}

export const SubcategoryMenu = (
  { category, isOpen, position }: SubcategoryMenuProps
) => {
  const subcategories = Array.isArray(category?.subcategories?.docs)
    ? category.subcategories.docs
    : [];

  console.log("Subcategories", subcategories);

  if (!isOpen || !category.subcategories) {
    return null;
  }

  const backgroundColor = category.color || "#F5F5F5";

  return (
    <div className="fixed z-100" style={{ top: position.top, left: position.left }}>
      {/* Invisible bridge to maintain hover */}
      <div className="w-60 h-3" />
      <div style={{ backgroundColor }} className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4p_0px_0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px]">
        <div className="flex flex-col">
          {category.subcategories?.map((subcategory: Category) => (
            <Link href="/" key={subcategory.slug} className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center underline font-medium border-b">
              {subcategory.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

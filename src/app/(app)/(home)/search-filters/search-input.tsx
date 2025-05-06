import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500 size-4" />
        <Input
          className="pl-8 placeholder:ml-2 focus:outline-none focus:border-transparent focus:ring-0 focus:ring-offset-0"
          placeholder="Search products"
        />
      </div>
      {/* TODO: Add Categories view all button */}
      {/* TODO: Add library button */}
    </div>
  );
};

export default SearchInput;

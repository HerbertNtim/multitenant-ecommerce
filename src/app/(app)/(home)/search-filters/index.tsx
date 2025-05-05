import SearchInput from "./search-input";

interface SearchFiltersProps {
  data: any[];
}

const SearchFilters = ({ data }: SearchFiltersProps) => {
  return (
    <div className="px-4 lg:px-12 flex flex-col py-8 gap-4 border-b w-full">
      <SearchInput />
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default SearchFilters;

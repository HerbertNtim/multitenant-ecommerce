interface SearchFiltersProps {
  data: any[]
}

const SearchFilters = ({data}: SearchFiltersProps) => {
  return (
    <div>{JSON.stringify(data, null, 2)}</div>
  )
}

export default SearchFilters

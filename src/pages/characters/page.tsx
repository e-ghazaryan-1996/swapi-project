import PeopleCard from "@/components/people/PeopleCard";
import useDebounce from "@/hooks/useDebounce";
import usePeoplesData from "@/hooks/usePeoplesData";
import { useState } from "react";

const Characters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    usePeoplesData(debouncedSearchQuery);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading people data</div>;
  }

  return (
    <div>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for people..."
          className="w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {data?.pages.map((page) =>
          page.results.map((person, idx) => (
            <PeopleCard key={person.url} idx={idx} person={person} />
          ))
        )}
        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Characters;

import PeopleCard from "@/components/people/PeopleCard";
import useFavoritesStore from "@/hooks/useFavouriteStore";

const Favorites = () => {
  const { favorites } = useFavoritesStore();

  if (favorites.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-700">
        No favorites yet.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Your Favorites
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((person, idx) => (
          <PeopleCard key={person.url} idx={idx} person={person} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;

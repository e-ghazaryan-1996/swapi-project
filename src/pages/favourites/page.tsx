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
          <div
            key={idx}
            className="max-w-sm rounded-lg shadow-lg bg-white p-4 transition-transform transform hover:scale-105"
          >
            <div className="block text-center text-xl font-semibold text-gray-800 hover:text-blue-500">
              {person.name}
            </div>
            <p className="text-gray-500 text-center">{person.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

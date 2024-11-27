import React from "react";
import { IPeople } from "@/types/people.interface";
import { generatePath, Link } from "react-router";
import { APP_ROUTE_PATHS } from "@/routes/route-path";
import useFavoritesStore from "@/hooks/useFavouriteStore";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

interface PeopleCardProps {
  person: IPeople;
  idx: number;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ person, idx }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const isFav = isFavorite(person.url);

  const handleFavoriteClick = () => {
    if (isFav) {
      removeFavorite(person.url);
    } else {
      addFavorite(person);
    }
  };

  return (
    <div className="max-w-sm rounded-lg h-full overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out relative">
      <div
        className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md cursor-pointer"
        onClick={handleFavoriteClick}
      >
        {isFav ? (
          <FaHeartBroken className="text-red-500" size={24} />
        ) : (
          <FaHeart className="text-gray-500" size={24} />
        )}
      </div>
      <div className="p-4">
        <div className="text-center mb-4">
          <Link
            to={generatePath(APP_ROUTE_PATHS.CHARACTER, { id: idx + 1 })}
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300"
          >
            {person.name}
          </Link>
          <p className="text-gray-500">{person.gender}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-medium text-gray-600">Height</p>
            <p>{person.height} cm</p>
          </div>
          <div>
            <p className="font-medium text-gray-600">Mass</p>
            <p>{person.mass} kg</p>
          </div>
          <div>
            <p className="font-medium text-gray-600">Birth Year</p>
            <p>{person.birth_year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;

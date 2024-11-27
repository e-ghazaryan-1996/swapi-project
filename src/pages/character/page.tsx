import { useCharacterData } from "@/hooks/useCharacterData";
import { Link, useParams } from "react-router";
import { FiLoader } from "react-icons/fi";
import { APP_ROUTE_PATHS } from "@/routes/route-path";

const Character = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isError } = useCharacterData(id!);

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center space-y-4">
          <FiLoader className="animate-spin text-blue-500" size={48} />
          <p className="text-xl text-gray-600">Loading character data...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-red-600">
          Error loading character data. Please try again.
        </p>
      </div>
    );
  }

  const {
    name,
    gender,
    birth_year,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    films,
  } = data;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 transition-transform duration-300 transform hover:scale-105">
            Character Details: {name}
          </h1>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  General Info
                </h2>
                <p className="text-gray-600">
                  <span className="font-bold">Name:</span> {name}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Gender:</span> {gender}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Birth Year:</span> {birth_year}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Height:</span> {height} cm
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Mass:</span> {mass} kg
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  Physical Features
                </h2>
                <p className="text-gray-600">
                  <span className="font-bold">Hair Color:</span> {hair_color}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Skin Color:</span> {skin_color}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Eye Color:</span> {eye_color}
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-700">Films</h2>
                <ul className="space-y-2 text-gray-600">
                  {films.map((film, index) => (
                    <li
                      key={index}
                      className="transition-all duration-300 hover:text-blue-500"
                    >
                      {film}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to={APP_ROUTE_PATHS.CHARACTERS}
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full transition-all duration-300 transform hover:bg-blue-600 hover:scale-105"
            >
              Back to Characters List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;

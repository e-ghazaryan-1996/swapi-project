import { APP_ROUTE_PATHS } from "./route-path";
import { MdFavorite } from "react-icons/md";
import { GiCharacter } from "react-icons/gi";

export const navigationRoutes = [
  {
    path: APP_ROUTE_PATHS.CHARACTERS,
    label: "Characters",
    icon: GiCharacter,
  },
  {
    path: APP_ROUTE_PATHS.FAVOURITES,
    label: "Favourites",
    icon: MdFavorite,
  },
];

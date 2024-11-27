import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IPeople } from "@/types/people.interface";

type State = {
  favorites: IPeople[];
};

type Action = {
  addFavorite: (person: IPeople) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const useFavoritesStore = create<State & Action>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (person) => {
        const favorites = get().favorites;
        set({ favorites: [...favorites, person] });
      },
      removeFavorite: (id) => {
        const favorites = get().favorites;
        set({ favorites: favorites.filter((person) => person.url !== id) });
      },
      isFavorite: (id) => {
        const favorites = get().favorites;
        return favorites.some((person) => person.url === id);
      },
    }),
    { name: "favorites-storage" }
  )
);

export default useFavoritesStore;

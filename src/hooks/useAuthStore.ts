import StorageService from "@/services/storage.service";
import { IUser } from "@/types/user.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string | null;
  user: IUser | null;
};

type Action = {
  setToken: (token: string) => void;
  setUser: (user: IUser) => void;
  removeToken: () => void;
};

const useAuthStore = create<State & Action>()(
  persist(
    (set) => ({
      token: StorageService.getToken(),
      user: null,
      setToken: (token) => {
        StorageService.setToken(token);
        set({ token });
      },
      setUser: (user) => set({ user }),
      removeToken: () => {
        StorageService.removeToken();
        set({ token: null });
        set({ user: null });
      },
    }),
    {
      name: "auth-store",
    }
  )
);

export default useAuthStore;

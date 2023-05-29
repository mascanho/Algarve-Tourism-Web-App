import { create } from "zustand";

interface FavouriteProps {
  favourites: any[];
  removeFavourite: (id: number) => void;
  resetFavourites: () => void;
}

const useRemoveFavourites = create<FavouriteProps>((set) => ({
  favourites: [],
  removeFavourite(id: number) {
    set((state) => ({
      favourites: state.favourites.filter((item) => item.id !== id),
    }));
    console.log("Removing: ", id);
  },
  resetFavourites() {
    set({ favourites: ["helllooooo"] });
  },
}));

export default useRemoveFavourites;

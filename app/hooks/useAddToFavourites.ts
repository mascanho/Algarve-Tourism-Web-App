import { create } from "zustand";

interface FavouriteProps {
  favourites: any[];
  addFavourite: (data: any) => void;
  removeFavourite: (id: number) => void;
}

const useAddToFavourites = create<FavouriteProps>((set) => ({
  favourites: [],
  addFavourite(data: any) {
    set((state) => ({
      favourites: [...state.favourites, data],
    }));
  },
  removeFavourite(id: number) {
    set((state) => ({
      favourites: state.favourites.filter((item) => item.id !== id),
    }));
    console.log("Removing: ", id);
  },
}));

export default useAddToFavourites;

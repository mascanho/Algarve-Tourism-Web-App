import { toast } from "react-hot-toast";
import { create } from "zustand";

interface FavouriteProps {
  favourites: any[];
  addFavourite: (data: any) => void;
  removeFavourite: (id: number) => void;
}

const useAddToFavourites = create<FavouriteProps>((set) => ({
  favourites: [],
  addFavourite(data: any) {
    set((state: any) => {
      const existingItem = state.favourites.find(
        (item: any) => item.id === data.id,
      );

      if (existingItem) {
        toast.error("Already added to favourites");
        return state;
      } else {
        toast.success("Added to favourites");
        console.log(state);
      }

      return {
        favourites: [data, ...state.favourites],
      };
    });
  },
  removeFavourite(id: number) {
    set((state) => ({
      favourites: state.favourites.filter((item) => item.id !== id),
    }));
    console.log("Removing: ", id);
  },
}));

export default useAddToFavourites;

import { toast } from "react-hot-toast";
import { create } from "zustand";

interface FavouriteProps {
  favourites: any[];
  addFavourite: (data: any, fromLocalStorage?: boolean) => void;
  removeFavourite: (id: number) => void;
}

const isAlreadyAdded = (favourites: any[], data: any) => {
  return favourites.some((item) => item.id === data.id);
};

const useAddToFavourites = create<FavouriteProps>((set) => ({
  favourites: [],
  addFavourite(data: any, fromLocalStorage = false) {
    set((state) => {
      const existingItem = isAlreadyAdded(state.favourites, data);

      if (existingItem && !fromLocalStorage) {
        toast.error("Already added to favourites");
        return state;
      }

      if (!existingItem && !fromLocalStorage) {
        toast.success("Added to favourites");
      }

      const updatedFavourites = [data, ...state.favourites];
      if (typeof window !== "undefined") {
        localStorage?.setItem("favourites", JSON.stringify(updatedFavourites));
      }

      return {
        favourites: updatedFavourites,
      };
    });
  },
  removeFavourite(id: number) {
    set((state) => {
      const updatedFavourites = state.favourites.filter(
        (item) => item.id !== id
      );
      if (typeof window !== "undefined") {
        localStorage?.setItem("favourites", JSON.stringify(updatedFavourites));
      }
      return {
        favourites: updatedFavourites,
      };
    });
  },
}));

// Initialization logic outside the store creation
if (typeof window !== "undefined") {
  const favourites = localStorage?.getItem("favourites");
  if (favourites) {
    useAddToFavourites.setState({ favourites: JSON.parse(favourites) });
  }
}
export default useAddToFavourites;

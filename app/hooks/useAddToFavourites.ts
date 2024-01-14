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
      const existingItem = state?.favourites?.find(
        (item: any) => item.id === data.id
      );

      if (existingItem) {
        toast.error("Already added to favourites");
        return state;
      } else {
        // Local storage
        localStorage.setItem(
          "favourites",
          JSON.stringify([data, ...state?.favourites])
        );
        toast.success("Added to favourites");

        const storage = localStorage.getItem("favourites");
        const parsedStorage = JSON.parse(storage || "[]");
      }

      return {
        favourites: [data, ...state.favourites],
      };
    });
  },
  removeFavourite(id: number) {
    set((state) => {
      const favourites = state.favourites.filter((item) => item.id !== id);

      localStorage.setItem("favourites", JSON.stringify([...favourites]));

      return {
        ...state,
        favourites,
      };
    });
  },
}));

export default useAddToFavourites;

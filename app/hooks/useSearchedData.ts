import { create } from "zustand";

interface SearchedDataProps {
  data: any[];
  AddData: (data: any) => void;
  addSearchInput: (data: any) => void;
  searchInput: string;
  allTypes: any[];
  addAllTypes: (data: any) => void;
}

const useSearchedData = create<SearchedDataProps>((set, get) => ({
  data: [],
  AddData(data: any) {
    set((state) => ({
      data,
    }));
  },

  searchInput: "",
  addSearchInput(searchInput: string) {
    set((state) => ({
      searchInput,
    }));
    console.log(searchInput);
  },

  allTypes: [],
  addAllTypes(allTypes: any) {
    set((state) => ({
      allTypes,
    }));
    console.log(allTypes, "From Zustand");
  },
}));

export default useSearchedData;

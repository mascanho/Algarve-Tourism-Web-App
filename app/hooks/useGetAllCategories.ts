import { createClient } from "contentful";
import { create } from "zustand";

interface contentfulProps {
  contentfulData: any[];
  getAllCategories: (data: any) => void;
}

const useGetAllCategories = create<contentfulProps>((set) => ({
  contentfulData: [],
  getAllCategories: (data: any) => {
    set((data: any) => ({
      contentfulData: data,
    }));
  },
}));

export default useGetAllCategories;

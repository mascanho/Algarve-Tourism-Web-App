import { create } from "zustand";

interface BuilderDataProps {
  builderData: any[];
  addBuilderData: (data: any) => void;
}

export const useAddBuilderData = create((set) => ({
  builderData: [],
  addBuilderData: (data: any) => set((state) => ({ builderData: data })),
}));

export default useAddBuilderData;

export const useAddToLocalStorage = (key: string, value: any) => {
  const addToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log("Key: " key, "Value: " value);
  };
};

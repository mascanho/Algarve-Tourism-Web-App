import Cookies from "js-cookie";

const useGetCookie = (cookiename: string) => {
  return Cookies.get(cookiename);
};

export default useGetCookie;

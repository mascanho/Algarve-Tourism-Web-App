import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <>
      <form className="relative sm:flex w-[350px] sm:w-[470px] mx-auto">
        <div className="flex bg-white/60 w-[360px] sm:w-[450px] mx-auto h-16 items-center justify-center rounded-full backdrop-blur-md overflow-hidden ">
          <input
            type="text"
            placeholder="Start your next adventure here..."
            className="h-12 bg-white rounded-full p-4 w-[340px] sm:w-[436px] mx-auto text-sm outline-none border-collapse"
          />
          <div />
        </div>
        <div className="absolute text-xs top-2  flex justify-center items-center right-0 sm:right-4 bg-blue-400 text-white w-12 h-12 rounded-full">
          <BsSearch className="text-xl" />
        </div>
      </form>
    </>
  );
}

export default Search;

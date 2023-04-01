import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <>
      <form className="relative hidden sm:flex w-[470px] mx-auto">
        <div className="flex bg-white/60 w-[450px] mx-auto h-16 items-center justify-center rounded-full backdrop-blur-md ">
          <input
            type="text"
            placeholder="This is a placeholder"
            className="h-12 bg-white rounded-l-full p-4"
          />
          <div />
          <input
            type="text"
            placeholder="This is a placeholder"
            className="h-12 bg-white rounded-r-full p-4 border-l-2 border-gray-200"
          />
        </div>
        <div className="absolute text-xs top-2 flex justify-center items-center right-4 bg-blue-400 text-white w-12 h-12 rounded-full">
          <BsSearch className="text-xl" />
        </div>
      </form>
    </>
  );
}

export default Search;

import { ReactNode, useState } from "react";
import Image from "next/image";
import SearchIcon from "../../public/assets/Icons/searchIcon.svg";
import { useDispatch } from "react-redux";
import { searchUserAsync, userDetailsAsync } from "@/redux/slice/user/userSlice";

const UserButtons = () => {
  const [searchParameter, setSearchParameter] = useState("");

  const dispatch = useDispatch();

  const handleUserSearch = (e) => {
    e.preventDefault();
    dispatch(searchUserAsync(searchParameter))
  }

  const handleSearchParameter = (searchParameter) => {
    setSearchParameter(searchParameter);
  }

  return (
    <div className="flex items-center justify-between flex-wrap w-full mb-4">
      {/* Title */}
      <h1 className="text-2xl mx-2 m-2 font-bold">Users</h1>

      <div className="flex flex-row flex-wrap">
        
        {/* Right-hand side search box */}
        <form onSubmit={(e) => handleUserSearch(e)} className="flex items-center md:w-80 border-2 m-2 border-solid border-gray-300 rounded-full px-4 py-2">
          <input
            type="search"
            placeholder="Search"
            value={searchParameter}
            onChange={(e) => handleSearchParameter(e.target.value)}
            className="w-full h-full outline-none bg-transparent text-blue-gray-700"
          />
          <div className="ml-2">
            <Image
              onClick={handleUserSearch}
              src={SearchIcon}
              alt="search-icon"
              className="cursor-pointer"
            />
          </div>
        </form>

      </div>
    </div>
  );
};

export default UserButtons;

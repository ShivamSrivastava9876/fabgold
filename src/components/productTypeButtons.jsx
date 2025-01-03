// components/UserComponent.js
import { ReactNode, useState } from "react";
import Image from "next/image";
import SearchIcon from "../../public/assets/Icons/searchIcon.svg";
import { useDispatch } from "react-redux";
import { searchProductTypeAsync } from "@/redux/slice/productType/productTypeSlice";
import Link from "next/link";

const ProductTypeButtons = ({
  addProductType,
  setAddProductType,
}) => {

  const dispatch = useDispatch();
  const [searchParameter, setSearchParameter] = useState("");

  const handleAddProductType = () => {
    setAddProductType(!addProductType);
  };

  const handleProductTypeSearch = (e) => {
    e.preventDefault();
    dispatch(searchProductTypeAsync(searchParameter)).then((result) => {
      if (searchProductTypeAsync.fulfilled.match(result)) {
        
      }
    })
  }

  const handleSearchParameter = (searchParameter) => {
    setSearchParameter(searchParameter);
  }

  return (
    <div className="flex items-center justify-between flex-wrap w-full mb-8">
      {/* User Title */}
      <h1 className="text-2xl mx-2 m-2 font-bold">Product type</h1>

      <div className="flex flex-row flex-wrap">
        {/* Right-hand side Buttons */}
        <Link href="#addProductType" className="flex items-center relative">
          <div className="flex items-center space-x-4 mx-2 relative">

            {/* Button 1 */}
            <button
              className={`flex items-center px-4 py-2 bg-[#BB1140] text-white rounded-full shadow transition-transform duration-300 transform ${addProductType ? "invisible" : ""
                }`}
              onClick={handleAddProductType}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add product type
            </button>
          </div>
        </Link>

        {/* Right-hand side Search Box */}
        <form onSubmit={(e) => handleProductTypeSearch(e)} className="flex items-center md:w-80 border-2 border-solid border-gray-300 m-2 rounded-full px-4 py-2">
          <input
            type="search"
            placeholder="Search"
            value={searchParameter}
            onChange={(e) => handleSearchParameter(e.target.value)}
            className="w-full h-full outline-none bg-transparent text-blue-gray-700"
          />
          <div className="ml-2">
            <Image
              onClick={handleProductTypeSearch}
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

export default ProductTypeButtons;

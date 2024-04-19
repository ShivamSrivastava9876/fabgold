import { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAsync, getCategoryList } from "@/redux/slice/category/categorySlice";
import { getProductTypeAsync, getProductTypeList, getSelectedProductTypeAsync } from "@/redux/slice/productType/productTypeSlice";
import { FiImage } from 'react-icons/fi';
import AddIcon from "../../public/assets/Icons/add.svg";
import Image from "next/image";

const EditFormProduct = ({ metalWeight, setMetalWeight, metalPrice, setMetalPrice, makingCharges, setMakingCharges, otherCharges, setOtherCharges, size, setSize, length, setLength, files, setFiles, productImage, row, handleCategoryClick, handleUpdateProduct, openProductType, description, setDescription, productType, setProductType, category, setCategory, quantity, setQuantity, price, setPrice, puritySpc, setPuritySpc, grossWeight, setGrossWeight, image, setImage, stoneWeight, setStoneWeight, subModel, setSubModel, model, setModel, productName, setProductName, productId, setProductId, huId, setHuId, openCategory, handleCategory, handleProductType, handleProductTypeClick, isOpen, handleCancel }) => {
    const dispatch = useDispatch();
    
    const modalClasses = isOpen ? 'block' : 'hidden';

    useEffect(() => {
        dispatch(getCategoriesAsync()).then((result) => {
            if (getCategoriesAsync.fulfilled.match(result) && category !== "") {
                dispatch(getSelectedProductTypeAsync(category))
            }
        })
    }, [dispatch, category])

    const categoryList = useSelector(getCategoryList);
    const productTypeList = useSelector(getProductTypeList);

    //To save new image
    const handleFileChange = (e) => {
        const selectedFile = e.target.files;
        const filesLength = selectedFile.length;

        setFiles(filesLength)
        setImage(selectedFile);
    }

    return (
        <div>
            <div className={`fixed inset-0 z-40 bg-black opacity-10 backdrop-blur-md transition-opacity ${modalClasses}`}></div>
            <div className="flex justify-center items-center fixed bottom-2 top-2 right-5 left-5 z-50">

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleUpdateProduct(e, row.HuId, row.productId, row.model, row.subModel, row.product, row.metalWeight, row.stoneWeight, row.grossWeight, row.size, row.length, row.puritySpc, row.metalPrice, row.makingCharges, row.otherCharges, row.quantity, row.description, row.category, row.productType, row.image);
                    }}
                    className="p-8 rounded shadow-md flex flex-col justify-start overflow-y-scroll no-scrollbar h-full w-auto bg-white border border-blue-500"
                >
                    <div className="my-2 bg-white">
                        <h2 className="mx-2 my-3 text-2xl font-bold">
                            Edit product
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                        <div class="relative cursor-pointer inline-block text-left mb-2 h-10 z-50">
                            <div onClick={handleCategory} class="inline-flex items-center justify-center px-4 py-2 w-full rounded-xl border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 active:bg-gray-100 active:text-gray-600">
                                {category || row.category || "Select category"}
                                {/* Arrow icon (tailwindcss/heroicons) */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-5 h-5 ml-2 -mr-1 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </div>

                            {openCategory && (
                                <div class="origin-top-right absolute z-10 right-16 mt-2 w-[220px] max-h-[150px] overflow-y-scroll rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    {categoryList.map((category) => (
                                        <div key={category.id} class="py-1">
                                            <div
                                                href="#"
                                                onClick={() => handleCategoryClick(category.category_name)}
                                                class="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-indigo-100"
                                            >
                                                {category.category_name}
                                            </div>
                                        </div>))}
                                </div>)}
                        </div>
                        <div onClick={handleProductType} class="relative inline-block cursor-pointer text-left mb-2">
                            <div class="inline-flex items-center justify-center px-4 py-2 w-full rounded-xl border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 active:bg-gray-100 active:text-gray-600">
                                {productType || row.productType || "Select product type"}
                                {/* Arrow icon (tailwindcss/heroicons) */}
                                <svg

                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-5 h-5 ml-2 -mr-1 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </div>

                            {openProductType && (
                                <div class="origin-top-right absolute z-10 right-16 mt-2 w-[220px] max-h-[150px] overflow-y-scroll rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">

                                    {productTypeList.map((productType) => (
                                        <div key={productType.id} class="py-1">
                                            <div
                                                href="#"
                                                onClick={() => handleProductTypeClick(productType.product_type)}
                                                class="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-indigo-100"
                                            >
                                                {productType.product_type}
                                            </div>
                                        </div>))}
                                </div>
                            )}
                        </div>
                        <div className="mb-4 ">
                            <input
                                type="text"
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                defaultValue={row.HuId}
                                value={huId}
                                onChange={(e) => setHuId(e.target.value)}
                                placeholder="Hu ID"
                            />
                        </div>
                        <div className="mb-4 ">
                            <input
                                type="text"
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                defaultValue={row.productId}
                                value={productId}
                                onChange={(e) => setProductId(e.target.value)}
                                placeholder="Product ID"
                            />
                        </div>
                        <div className="mb-4 ">
                            <input
                                type="text"
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                defaultValue={row.model}
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                                placeholder="Model"
                            />
                        </div>
                        <div className="mb-4 ">
                            <input
                                type="text"
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                defaultValue={row.subModel}
                                value={subModel}
                                onChange={(e) => setSubModel(e.target.value)}
                                placeholder="Sub model"
                            />
                        </div>

                        <div className="mb-4 ">
                            <input
                                type="text"
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                defaultValue={row.product}
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                placeholder="Product name"
                            />
                        </div>

                        <div className={`mb-4 md:w-21.375`}>
                            <input
                                type="number"
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                defaultValue={row.metalWeight}
                                value={metalWeight}
                                onChange={(e) => setMetalWeight(e.target.value)}
                                placeholder="Metal weight"
                            />
                        </div>
                        {(row.productType.toLowerCase() === 'necklace') && <div className={`mb-4 md:w-21.375`}>
                            <input
                                type="number"
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                defaultValue={row.stoneWeight}
                                value={stoneWeight}
                                onChange={(e) => setStoneWeight(e.target.value)}
                                placeholder="Stone weight"
                            />
                        </div>}
                        {(row.productType.toLowerCase() === 'necklace' || row.productType.toLowerCase() === 'ring' || row.productType.toLowerCase() === 'bangle') && <div className={`mb-4 md:w-21.375`}>
                            <input
                                type="number"
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                defaultValue={row.size}
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                placeholder="Size"
                            />
                        </div>}
                        {(row.productType.toLowerCase() === 'bracelet' || row.productType.toLowerCase() === 'chain') && <div className={`mb-4 md:w-21.375`}>
                            <input
                                type="number"
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                defaultValue={row.length}
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                placeholder="Length"
                            />
                        </div>}

                        
                        <div className={`mb-4 md:w-21.375`}>
                            <input
                                type="number"
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                defaultValue={row.grossWeight}
                                value={grossWeight}
                                onChange={(e) => setGrossWeight(e.target.value)}
                                placeholder="Total weight"
                            />
                        </div>

                        

                        <div className="mb-4 flex justify-center items-center">
                            <label htmlFor="fileInput" className="w-full flex items-center cursor-pointer h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]">
                                <FiImage className="mr-2" /> {files !== '' ? `${files} images` : 'Click here to update images'}
                                <input
                                    type="file"
                                    id="fileInput"
                                    multiple
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>




                        <div className={`mb-4 md:w-21.375`}>
                            <select
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010] appearance-none"
                                defaultValue={row.puritySpc}
                                value={puritySpc}
                                onChange={(e) => setPuritySpc(e.target.value)}
                            >
                                <option value="">Select Purity</option>
                                <option value="24k">24k</option>
                                <option value="23k">23k</option>
                                <option value="22k">22k</option>
                                <option value="18k">18k</option>
                            </select>
                        </div>

                        <div className={`mb-4 md:w-21.375`}>
                            <input
                                type="number"
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                defaultValue={row.metalPrice}
                                value={metalPrice}
                                onChange={(e) => setMetalPrice(e.target.value)}
                                placeholder="Metal price"
                            />
                        </div>
                        <div className={`mb-4 md:w-21.375`}>
                            <input
                                type="number"
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                defaultValue={row.makingCharges}
                                value={makingCharges}
                                onChange={(e) => setMakingCharges(e.target.value)}
                                placeholder="Making charges"
                            />
                        </div>
                        <div className={`mb-4 md:w-21.375`}>
                            <input
                                type="number"
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                defaultValue={row.otherCharges}
                                value={otherCharges}
                                onChange={(e) => setOtherCharges(e.target.value)}
                                placeholder="Other charges"
                            />
                        </div>
                        <div className="mb-4 ">
                            <input
                                type="number"
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                defaultValue={row.quantity}
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                placeholder="Quantity"
                            />
                        </div>
                        <div className="mb-4 ">
                            <input
                                type="text"
                                className="w-full h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                defaultValue={row.description}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Description"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row space-x-2 m-2">
                        <button
                            type="submit"
                            className="w-full mt-2 rounded-xl bg-[#BB1140] text-white py-2 transition duration-300"
                        >
                            Update
                        </button>
                        <button
                            onClick={handleCancel}
                            className="w-full mt-2 rounded-xl bg-[#BB1140] text-white py-2 transition duration-300"
                        >
                            Cancel
                        </button>
                    </div>
                </form>

            </div >
        </div >
    );
};

export default EditFormProduct;

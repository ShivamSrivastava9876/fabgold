import React, { useState } from 'react';
import Button from "@mui/material/Button";
import { FiImage } from 'react-icons/fi';

const EditForm = ({ row, handleUpdateCategory, isOpen, handleCancel, category, setCategory, image, setImage }) => {
    const modalClasses = isOpen ? 'block' : 'hidden';
    const [newImageStatus, setNewImageStatus] = useState(false);

    //To save new image
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setImage(selectedFile);
        setNewImageStatus(!newImageStatus);    }

    return (
        <div>
            <div className={`fixed inset-0 z-40 bg-black opacity-10 backdrop-blur-md transition-opacity ${modalClasses}`}></div>
            <div className="flex justify-center items-center fixed bottom-2 top-2 right-5 left-5 z-50">

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleUpdateCategory(row.category);
                    }}
                    className="p-8 rounded shadow-md flex flex-col justify-start w-35rem h-28rem bg-white border border-blue-500"
                >
                    <div className="mb-4">
                        <h2 className=" flex items-center m-4 text-2xl font-bold">
                            Edit category
                        </h2>
                    </div>
                    <div className="mb-2 h-10">
                        <input
                            type="text"
                            className="w-full py-2 px-8 h-10 flex flex-row items-center justify-center border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                            defaultValue={row.category}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Category name"
                        />
                    </div>

                    <div className="mb-4 flex justify-center items-center">
                        <label htmlFor="fileInput" className="w-full flex items-center cursor-pointer h-9 py-2 px-8 border rounded-xl outline-none border-[#9C9C9C] text-[#111010]">
                            <FiImage className="mr-2" /> {newImageStatus ? 'New image uploaded' : 'Click here to update image'}
                            <input
                                type="file"
                                id="fileInput"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
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

            </div>
        </div>
    )
}

export default EditForm;
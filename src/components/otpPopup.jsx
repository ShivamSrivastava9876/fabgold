import React from "react";

const Popup = ({ show, handleClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed -inset-5 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white right-2 p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-0 right-2 text-2xl text-[#BB1140] hover:text-gray-900"
          onClick={handleClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;

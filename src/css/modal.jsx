import React from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({ setModalOpen }) {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      onClick={() => setModalOpen(false)}
    >
      <div
        className="relative w-[250px] h-[170px] bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="h-[50px] bg-white rounded-t-lg overflow-hidden">
          <h5 className="text-center text-lg font-medium text-gray-800 p-2">
            Confirm
          </h5>
        </div>

        {/* Modal Content */}
        <div className="p-4 text-center text-sm text-gray-800">
          Are you really want to Log Out?
        </div>

        {/* Modal Actions */}
        <div className="absolute bottom-2 w-full px-4">
          <div className="flex justify-around items-center">
            <button
              className="mt-2 px-6 py-2 text-white bg-red-500 rounded-lg text-sm font-medium transition-transform transform hover:-translate-y-1 hover:shadow-lg"
              onClick={() => {
                setModalOpen(false);
                localStorage.clear();
                navigate("./loginpage");
              }}
            >
              Log Out
            </button>

            <button
              className="mt-2 px-6 py-2 text-white bg-gray-800 rounded-lg text-sm font-medium transition-transform transform hover:-translate-y-1"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

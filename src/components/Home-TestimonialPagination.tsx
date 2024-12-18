import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

interface CustomPaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number, newItemsPerPage: number) => void;
}

const TestimonialsPagination: React.FC<CustomPaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage, itemsToShow);
    }
  };

  const handleShowMore = () => {
    const newItemsPerPage = itemsToShow + itemsPerPage;
    if (newItemsPerPage <= totalItems) {
      setItemsToShow(newItemsPerPage);
    }
  };

  useEffect(() => {
    // Reset to show only the first set when currentPage changes
    setItemsToShow(itemsPerPage);
  }, [currentPage, itemsPerPage]);

  return (
    <div className="flex justify-center items-center bg-gray-400 py-3 px-8 rounded-xl shadow-lg shadow-gray-600">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className={`flex items-center justify-center w-10 h-10 rounded-full ${currentPage === 1 ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-yellow-600 hover:bg-yellow-500 text-white'} transition duration-300 ease-in-out`}
      >
        <FaArrowAltCircleLeft className="text-xl" />
      </button>

      <div className="flex mx-4 space-x-2">
        {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            className={`w-10 h-10 rounded-full text-lg font-bold ${currentPage === index + 1 ? 'bg-green1 text-white shadow-md shadow-gray-00' : 'bg-gray-300 text-gray-800 hover:bg-green2 hover:text-white'} transition transform duration-300 hover:scale-105 ease-in-out`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        onClick={handleShowMore}
        className={`flex items-center justify-center w-10 h-10 rounded-full bg-yellow-600 hover:bg-yellow-500 text-white transition duration-300 ease-in-out ${itemsToShow >= totalItems ? 'cursor-not-allowed' : ''}`}
      >
        Mostrar más
      </button>

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className={`flex items-center justify-center w-10 h-10 rounded-full ${currentPage === totalPages ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-yellow-600 hover:bg-yellow-500 text-white'} transition duration-300 ease-in-out`}
      >
        <FaArrowAltCircleRight className="text-xl" />
      </button>
    </div>
  );
};

export default TestimonialsPagination;

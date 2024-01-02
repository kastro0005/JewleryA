import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

function SmallSetPaginationFil({ list_page, list, count, Prod }) {
  const [active, setActive] = useState(1);
  const [listingsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const visitPage = (page) => {
    setCurrentPage(page);
    setActive(page);
    list_page(Prod, page);
  };
  const previous_number = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setActive(currentPage - 1);
      list_page(Prod, currentPage - 1);
    }
  };
  const next_number = () => {
    if (currentPage !== Math.ceil(list.length / 3)) {
      setCurrentPage(currentPage + 1);
      setActive(currentPage + 1);
      list_page(Prod, currentPage + 1);
    }
  };

  let numbers = [];
  const getNumbers = () => {
    let itemsPerPage = listingsPerPage;
    let pageNumber = 1;

    for (let i = 0; i < count; i += itemsPerPage) {
      const page = pageNumber;
      let content = null;
      if (active === page) {
        content = (
          <div key={i} className={`hidden md:-mt-px md:flex`}>
            <div className="border-gray-700 text-gray-900 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-semibold">
              {pageNumber}
            </div>
          </div>
        );
      } else {
        content = (
          <div
            key={i}
            onClick={() => {
              visitPage(page);
            }}
            className={`hidden md:-mt-px md:flex`}>
            <div className="cursor-pointer border-transparent text-gray-300 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-semibold">
              {pageNumber}
            </div>
          </div>
        );
      }
      numbers.push(content);
      pageNumber++;
    }
    return numbers;
  };
  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-center mb-4">
      {currentPage !== 1 ? (
        <div className="-mt-px w-0 flex-1 flex justify-end">
          <button
            onClick={() => {
              previous_number();
            }}
            className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm hover:bg-gray-100 ">
            <ArrowLeftCircleIcon
              className="mr-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span className="font-semibold">Previous</span>
          </button>
        </div>
      ) : (
        <div className="-mt-px w-0 flex-1 flex justify-end">
          <button className="cursor-not-allowed border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm ">
            <ArrowLeftCircleIcon
              className="mr-3 h-5 w-5 text-gray-200"
              aria-hidden="true"
            />
            <span className="font-semibold text-gray-300">Previous</span>
          </button>
        </div>
      )}
      {getNumbers()}
      {numbers.length === 0 || currentPage === numbers.length ? (
        <div className="-mt-px w-0 flex-1 flex ">
          <button className="cursor-not-allowed border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm ">
            <span className="font-semibold text-gray-300">Next</span>
            <ArrowRightCircleIcon
              className="ml-3 h-5 w-5 text-gray-200"
              aria-hidden="true"
            />
          </button>
        </div>
      ) : (
        <div className="-mt-px w-0 flex-1 flex">
          <button
            onClick={() => {
              next_number();
            }}
            className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm hover:bg-gray-100 ">
            <span className="font-semibold">Next</span>
            <ArrowRightCircleIcon
              className="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
        </div>
      )}
    </nav>
  );
}

export default SmallSetPaginationFil;

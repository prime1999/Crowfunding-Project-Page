import React, { useContext } from "react";
import { FaBookmark } from "react-icons/fa";
import CrowdFundingContext from "../Context";

function Mastercraft() {
  const { bookmarked, handleBookmark } = useContext(CrowdFundingContext);
  return (
    <div className="bg-white p-6 text-center relative -mt-16 rounded-md">
      <div>
        <h1 className="text-2xl font-bold">Mastercraft Bamboo monitor Riser</h1>
        <p className="text-darkGray text-base mt-4">
          A beautiful handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex flex-row items-center justify-between">
          <button className="bg-moderateCyan px-10 py-2.5 rounded-3xl text-white font-medium text-sm hover:bg-darkCyan">
            Back this project
          </button>
          <div
            onClick={handleBookmark}
            className="flex flex-row items-center hover:cursor-pointer"
          >
            <FaBookmark
              className={`z-10 flex p-3 mr-4 text-5xl text-white rounded-full ${
                bookmarked ? "bg-darkCyan" : "bg-black"
              }`}
            />
            <p
              className={`hidden bg-lightGray ${
                bookmarked ? "text-darkCyan" : "text-black"
              } px-6 w-48 z-0 -ml-12 py-2.5 rounded-3xl mt-3 md:block`}
            >
              {bookmarked ? "Bookmarked" : "Bookmark"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mastercraft;

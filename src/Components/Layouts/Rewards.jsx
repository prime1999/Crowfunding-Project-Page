import ProjectModal from "../ProjectModal";
import React, { useContext } from "react";
import CrowdFundingContext from "../Context";

function Rewards() {
  const { handleModal } = useContext(CrowdFundingContext);
  return (
    <>
      <div className="bg-white mx-auto mt-6 p-6">
        <div className="border p-4 rounded-md">
          <div className="flex flex-col justify-between mb-6 md:flex-row md:items-center">
            <h2 className="text-base font-bold">Bamboo Stand</h2>
            <h4 className="text-base text-moderateCyan">Pleadge $25 or more</h4>
          </div>
          <div>
            <p className="text-darkGray text-sm">
              You get a Egronomic stand made of natural bamboo. You've helped us
              launch out promotional campaign, and you will be added to our
              Backers member list.
            </p>
            <div className="flex flex-col justify-center md:flex-row md:justify-between">
              <div className="flex">
                <h3 className="text-md font-bold">101</h3>
                <small className="text-sm mt-1 ml-2">left</small>
              </div>
              <button
                onClick={handleModal}
                className="bg-moderateCyan w-48 mt-2 px-6 py-2 text-white rounded-3xl"
              >
                Select Reward
              </button>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="border p-4 rounded-md mt-6">
          <div className="flex flex-col justify-between mb-6 md:flex-row md:items-center">
            <h2 className="text-base font-bold">Black Edition Stand</h2>
            <h4 className="text-base text-moderateCyan">Pleadge $75 or more</h4>
          </div>
          <div>
            <p className="text-darkGray text-sm">
              You get a Black Edition Stand and a personal thank you. You will
              be added to our Backers member list. Shipping is included.
            </p>
            <div className="flex flex-col justify-center md:flex-row md:justify-between">
              <div className="flex">
                <h3 className="text-md font-bold">64</h3>
                <small className="text-sm mt-1 ml-2">left</small>
              </div>
              <button
                onClick={handleModal}
                className="bg-moderateCyan w-48 mt-2 px-6 py-2 text-white rounded-3xl"
              >
                Select Reward
              </button>
            </div>
          </div>
        </div>
        {/* third */}
        <div className="border p-4 rounded-md mt-6">
          <div className="flex flex-col justify-between mb-6 md:flex-row md:items-center">
            <h2 className="text-lightGray text-base font-bold">
              Mahogany Special Edition
            </h2>
            <h4 className="text-base text-moderateCyan">
              Pleadge $200 or more
            </h4>
          </div>
          <div>
            <p className="text-darkGray text-sm">
              You get two special edition mahogany stand, a backer t-shirt and a
              special thank you. You will be added to our Backers member list.
              Shipping is included.
            </p>
            <div className="flex flex-col justify-center md:flex-row md:justify-between">
              <div className="flex">
                <h3 className="text-darkGray text-md font-bold">0</h3>
                <small className="text-sm mt-1 ml-2">left</small>
              </div>
              <button
                onClick={handleModal}
                className="disabled w-48 mt-2 px-6 py-2 text-white rounded-3xl"
              >
                Out of stock
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProjectModal />
    </>
  );
}

export default Rewards;

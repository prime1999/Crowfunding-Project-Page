import React from "react";

function FourthSelection() {
  return (
    <div>
      <div className="border p-4 rounded-md mt-6 mb-12`">
        <div>
          <div className="flex flex-col justify-between mb-6 md:flex-row md:items-center">
            <div className="flex">
              <h3 className="text-sm font-bold text-darkGray">
                Mahogany Special Edition
              </h3>

              <h4 className="text-sm text-moderateCyan ml-2">
                Pleadge $200 or more
              </h4>
            </div>
            <h5 className="hidden text-darkGray font-bold md:block">
              0 <span className="text-lightGray font-thin">left</span>
            </h5>
          </div>
        </div>
        <div>
          <p className="text-darkGray text-sm mb-6">
            You get two special edition mahogany stand, a backer t-shirt and a
            special thank you. You will be added to our Backers member list.
            Shipping is included.
          </p>

          <div className="flex md:hidden">
            <h3 className="text-md font-bold">64</h3>
            <small className="text-sm mt-1 ml-2 text-lightGray">left</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSelection;

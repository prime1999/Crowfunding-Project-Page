import React, { useContext, useState } from "react";
import CrowdFundingContext from "../../Context";

function FirstSelection() {
  const { pledged, handlePledged } = useContext(CrowdFundingContext);
  return (
    <div>
      <div
        id="active"
        className={`p-4 border-2 ${
          pledged ? "border-moderateCyan" : ""
        } rounded-md mt-6`}
      >
        <div className="flex">
          <input
            className="bg-darkCyan text-darkCyan -mt-6 mr-2"
            type="radio"
            id="check1"
          />
          <div className="mb-6">
            <label
              onClick={handlePledged}
              htmlFor="check1"
              className="text-base font-bold hover:cursor-pointer hover:text-moderateCyan"
            >
              Pledge with no reward
            </label>
          </div>
        </div>
        <div>
          <p className="text-darkGray text-sm">
            Choose to support us without a reward if you simply belive in our
            project. As a backer you will be signed up to receive project
            updates via email.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstSelection;

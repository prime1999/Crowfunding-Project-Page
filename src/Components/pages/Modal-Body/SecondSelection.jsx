import { Alert } from "bootstrap";
import React, { useContext, useState } from "react";
import AlertModal from "../../AlertModal";
import CrowdFundingContext from "../../Context";

function SecondSelection() {
  const {
    number,
    isDisabled,
    handleNumber,
    onSubmit,
    handleModal,
    handleAlert,
  } = useContext(CrowdFundingContext);
  const [pledged, setPledged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAlert();
    handleModal();
    onSubmit();
  };

  return (
    <div>
      <div
        className={`border-2 ${
          pledged ? "border-moderateCyan" : ""
        } p-4 rounded-md mt-6`}
      >
        <div>
          <input
            className="bg-darkCyan text-darkCyan"
            type="radio"
            id="check2"
          />
          <div className="flex flex-col justify-between mb-6 md:flex-row md:items-center">
            <div className="flex">
              <label
                htmlFor="check2"
                onClick={() => setPledged(!pledged)}
                className="text-sm font-bold hover:cursor-pointer hover:text-moderateCyan"
              >
                Bamboo Stand
              </label>
              <h4 className="text-sm text-moderateCyan ml-2">
                Pleadge $25 or more
              </h4>
            </div>
            <h5 className="hidden font-bold md:block">
              101 <span className="text-lightGray font-thin">left</span>
            </h5>
          </div>
        </div>
        <div>
          <p className="text-darkGray text-sm mb-6">
            You get a ergonomic stand made of natural bamboo. You've helped us
            launch out promotional campaign, and you will be added to our
            Backers member list.
          </p>

          <div className="flex md:hidden">
            <h3 className="text-md font-bold">101</h3>
            <small className="text-sm mt-1 ml-2 text-lightGray">left</small>
          </div>
        </div>
        {pledged && (
          <div>
            <hr />
            <div className="md:flex items-center justify-between">
              <h6 className="text-center my-4">Enter your pledge</h6>
              <div className="flex justify-center">
                <form onSubmit={handleSubmit}>
                  <input
                    min={25}
                    placeholder="25"
                    type="number"
                    onChange={handleNumber}
                    value={number}
                    className="pl-2 w-20 border-2 rounded-3xl h-10"
                  />
                  <button
                    type="submit"
                    className={`${
                      isDisabled ? "disabled" : "bg-darkCyan"
                    } w-24 py-2 text-white rounded-3xl h-10 ml-2`}
                  >
                    continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SecondSelection;

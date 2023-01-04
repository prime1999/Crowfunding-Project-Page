import React, { useContext } from "react";
import CrowdFundingContext from "../Context";

function ProjectProgress() {
  const { backer, progress, amount } = useContext(CrowdFundingContext);
  return (
    <div className="bg-white p-6 text-center relative mt-6 rounded-md">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:border-r md:pr-12">
          <h1>${amount}</h1>
          <p>of $100,000 backed</p>
          <hr className="w-1/2 mx-auto md:hidden" />
        </div>
        <div className="md:px-6 md:border-r md:pr-24">
          <h1 className="text-center">{backer}</h1>
          <p>total backers</p>
          <hr className="w-1/2 mx-auto md:hidden" />
        </div>
        <div className="md:px-6 md:pr-24">
          <h1>56</h1>
          <p>days left</p>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-6">
        <div className="w-full bg-lightGray rounded-md h-2.5 z-0">
          <div
            className={`bg-darkCyan rounded-md h-full z-10`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectProgress;

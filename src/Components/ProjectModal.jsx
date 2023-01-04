import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { FaTimes } from "react-icons/fa";
import FirstSelection from "./pages/Modal-Body/FirstSelection";
import SecondSelection from "./pages/Modal-Body/SecondSelection";
import ThirdSelection from "./pages/Modal-Body/ThirdSelection";
import FourthSelection from "./pages/Modal-Body/FourthSelection";
import CrowdFundingContext from "./Context";
import AlertModal from "./AlertModal";

function ProjectModal() {
  const { modal, handleModal, modalShow } = useContext(CrowdFundingContext);
  {
    if (modal === true && modalShow === false) {
      return (
        <div className="mx-auto p-6 mb-12">
          <Modal
            show={modal}
            className=""
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <div className="flex flex-row justify-between mt-4 w-11/12 mx-auto">
              <h4 className="font-bold text-md">Back this project</h4>
              <FaTimes
                onClick={handleModal}
                className=" text-1xl hover:cursor-pointer"
              />
            </div>
            <p className="w-11/12 mx-auto text-darkGray text-base mt-4">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>

            <Modal.Body>
              <div>
                <FirstSelection />
                {/* second section */}
                <SecondSelection />
                {/* third section */}
                <ThirdSelection />
                {/* FourthSelection */}
                <FourthSelection />
              </div>
            </Modal.Body>
          </Modal>
        </div>
      );
    } else if (modal === false && modalShow === true) {
      return <AlertModal />;
    }
  }
}

export default ProjectModal;

import React, { useContext } from "react";
import check from "./images/icon-check.svg";
import Modal from "react-bootstrap/Modal";
import CrowdFundingContext from "./Context";

function AlertModal() {
  const { modalShow, handleAlert } = useContext(CrowdFundingContext);
  return (
    <div className="w-48">
      <Modal
        show={modalShow}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="flex flex-col justify-center items-center">
            <img className="my-6" src={check} alt="" />
            <h6 className="text-base font-bold">Thank You for your support</h6>
            <p className="text-center text-base my-2 text-darkGray leading-normal">
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monito Riser worldwide. You will get an email once our
              campaign is completed.
            </p>
            <button
              className="bg-moderateCyan my-4 text-sm text-white px-4 py-2 rounded-3xl font-bold hover:bg-darkCyan
              "
              onClick={handleAlert}
            >
              Got it!
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AlertModal;

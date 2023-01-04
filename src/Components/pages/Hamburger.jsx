import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import CrowdFundingContext from "../Context";

function Hamburger() {
  const { menu, handleMenu } = useContext(CrowdFundingContext);
  return (
    <>
      <div className="mt-6">
        <Modal
          className="mt-16"
          size="sm"
          show={menu}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header>
            <FaTimes
              onClick={handleMenu}
              className="ml-72 text-2xl hover:cursor-pointer"
            />
          </Modal.Header>
          <Modal.Body className="border-b p-3">
            <Link className="text-black no-underline" to="/about">
              About
            </Link>
          </Modal.Body>
          <Modal.Body className="border-b p-3">Discover</Modal.Body>
          <Modal.Body className="border-b p-3">Get Started</Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Hamburger;

import React from "react";
import Modal from "./modal";
import { useState } from "react";
import "./modal.css";

const ModalTest = () => {
  const [showmodalpopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showmodalpopup);
  }
  function onclose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showmodalpopup && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onclose={onclose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
};

export default ModalTest;

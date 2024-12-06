import React from "react";
import { useState } from "react";

export default function Modal() {
  const [modalDisplay, setModalDisplay] = useState("none");

  const showWindow = () => {
    setModalDisplay("block");
  };

  const closeWindow = () => {
    setModalDisplay("none");
  };

  return (
    <div>
      <div className="modal-container">
        <button className="show-window" onClick={showWindow}>
          View more
        </button>
        <div className="window" style={{ display: modalDisplay }}>
          <p>Burada sizin reklaminiz ola bilerdi</p>
          <button className="close-window" onClick={closeWindow}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

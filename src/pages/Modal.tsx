import { useState } from "react";
import './modal.css'
const Modal = () => {
  let [view, setView] = useState(false);
  let show = () => setView(true);
  let close = () => setView(false);
  //style={{top: view && "5px"  }}
  return (
    <div>
      <div className={`modal ${view && "topper"}`} >
        <p className="modal-header">This is a Modal Header</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus.{" "}
        </p>
        <div className="btn-box">
          <button onClick={close}>Close</button>
        </div>
      </div>
      <div className="btn-box">
        <button onClick={show}>Show Modal</button>
      </div>
    </div>
  );
};
export default Modal;

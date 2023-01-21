import React, { useState } from "react";


const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const MyModal =()=> {
         return(
          <>
          <div className="modal-wrapper"  onClick={()=>setShowModal(false)}></div>
          <div className="container11">
      <h2>THANK YOU</h2>
      <p>
      Hello my self Durgesh Nagar I am from indore 
      </p>
    <button onClick={()=>setShowModal(false)}>close</button>
    </div>
    </>
  );}
  return (
    <>
      <button className="model-btn" onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      {showModal && <MyModal />}
    </>
  );
};
export default Modal;
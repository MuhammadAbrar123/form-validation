import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modals from "./component/Modals";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return <>
  <div >
  <h1 className="text-center">Employees Data</h1>
  <button className="btn btn-secondary ms-3 " title="Add new Row!"  onClick={openModal}>
  <FontAwesomeIcon icon={faPlus} />
      </button>
      <Modals show={showModal} handleClose={closeModal} />
      </div>
     
  </>;
}

export default App;

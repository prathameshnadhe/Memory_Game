import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="text-center mt-16">
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Open Modal
        </button>
      </div>

      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default App;

import React from "react";

const Modal = ({ closeModal }) => {
  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") closeModal();
  };

  return (
    <div
      id="overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white w-1/3 h-2/3 rounded-lg flex flex-col overflow-hidden">
        <div className="p-4 bg-gray-100 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">Modal Title</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 text-2xl hover:text-black"
          >
            &times;
          </button>
        </div>

        <div className="p-4 overflow-y-auto flex-1">
          <p>
            This is the modal content. Add your text here. If the content is
            long, it will scroll while the title and footer remain fixed.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula, purus nec facilisis porttitor, turpis justo ullamcorper
            nulla, eu tincidunt mauris justo sit amet nisi. Curabitur eget
            purus non leo laoreet hendrerit.
          </p>

          {[...Array(50)].map((_, i) => (
            <p key={i}>This is additional content line {i + 1}.</p>
          ))}
        </div>

        <div className="p-4 bg-gray-100 border-t">
          <button
            onClick={closeModal}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

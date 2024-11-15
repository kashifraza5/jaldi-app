import { useState } from "react";
import Input from "./Input";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button
        type="button"
        className="inline-flex justify-center rounded-md bg-[#F8CD3A] px-4 py-2 text-sm font-semibold text-white "
        onClick={toggleModal}
      >
        ADD AGENT
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Modal background overlay */}
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-300 ease-out"
            aria-hidden="true"
          ></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-transform duration-100 ease-out sm:my-8 sm:w-full sm:max-w-lg"
                onClick={(e) => e.stopPropagation()} // Prevent click event from propagating to the background overlay
              >
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="flex justify-between">
                    <h1 className="text-lg font-semibold">ADD AGENT</h1>
                    {/* Close Button */}
                    <button
                      type="button"
                      onClick={closeModal}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <label htmlFor="" className="mt-3">
                        NAME
                      </label>
                      <Input placeholder="Enter Name" className="w-full py-2" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="" className="mt-3">
                        EMAIL
                      </label>
                      <Input
                        placeholder="Enter Email"
                        className="w-full py-2"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="" className="mt-3">
                        Password
                      </label>
                      <Input
                        placeholder="Enter Password"
                        className="w-full py-2"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="" className="mt-3">
                        Confirm Password
                      </label>
                      <Input
                        placeholder="Confirm Password"
                        className="w-full py-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto"
                  >
                    ADD Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

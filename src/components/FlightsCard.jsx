import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdCancel } from "react-icons/md";

const FlightsCard = ({ flight }) => {
  const { origin, data, destination, price, availability } = flight;
  const [buttonStatus, setButtonStatus] = useState(false);

  const CustomToast = ({ header, message }) => (
    <div
      className="pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full lg:w-full rounded-lg bg-success-100 bg-clip-padding text-sm text-success-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
      id="static-example"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-te-autohide="false"
      data-te-toast-init
      data-te-toast-show
    >
      <div className="flex items-center justify-between rounded-t-lg border-b-2 w-64 border-success/20 bg-success-100 bg-clip-padding px-4 pb-2 pt-0">
        <p className="flex items-center font-bold text-success-700">
          <span className="mr-2 h-4 w-4">
            <div className="items-center text-center">
              {!buttonStatus ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <MdCancel className="h-4 w-4" />
              )}
            </div>
          </span>
          {header}
        </p>
        <div className="flex items-center">
          <p className="text-xs text-success-700">Code: 7745432</p>
          <button
            type="button"
            className="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-toast-dismiss
            aria-label="Close"
          ></button>
        </div>
      </div>
      <div className="break-words rounded-b-lg bg-success-100 px-0 w-64 pt-4 text-success-700">
        {message}
      </div>
    </div>
  );

  const notifySuccess = () => {
    toast.success(
      <CustomToast
        header="Flybondi"
        message="Your flight reservation was confirmed. Thank you for choosing our airline!"
      />,
      {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "w-80 lg:w-96 md:w-96 text-center mx-auto h-auto h-auto",
        bodyClassName: "w-full break-words",
        style: {
          background: "#4CAF50",
          color: "#FFFFFF",
        },
      }
    );
  };

  const notifyError = () => {
    toast.error(
      <CustomToast
        header="Flybondi"
        message="Apologies for the inconvenience. Please consider reserving with us again in the future."
      />,
      {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "w-80 lg:w-96 md:w-96 text-center mx-auto h-auto h-auto",
        bodyClassName: "w-full break-words",
        style: {
          background: "#F44336",
          color: "#FFFFFF",
        },
      }
    );
  };

  return (
    <>
      <div className="mt-2 mb-5 lg:mb-0 flex border px-2 py-2 md:py-0 lg:py-0 sm:flex-row mx-6 sm:justify-between text-center md:text-left lg:text-left items-center flex-wrap ">
        <p className="text-gray-500 mx-8 md:mx-2 lg:mx-2 flex flex-col text-lg mr-2 md:mr-0 lg:mr-0 md:text-lg lg:text-lg">
          Date
          <span className="font-bold text-lg">{data}</span>
        </p>
        <div className="flex flex-row place-items-center p-2 pl-8 md:pl-0 lg:pl-0 pt-3 md:pt-0 lg:pt-0">
          <div className="flex flex-col ml-6 md:pt-3 lg:pt-2 sm:pb-2">
            <p className="text-sm text-gray-500 font-bold">Qatar Airways</p>
            <p className="text-xs text-gray-500">QR1456</p>
            <div className="text-xs text-gray-500">2*23kg</div>
          </div>
        </div>

        <div className="flex flex-row mx-6 pt-2 md:mx-0 md:pt-0 lg:mx-0 lg:pt-0">
          <div className="flex flex-col p-2 pl-5 border-l">
            <p className="text-gray-500 grid">
              Origin
              <span className="font-bold">{origin}</span>
            </p>
          </div>
          <div className="flex flex-col p-2 lg:px-8">
            <p className="text-gray-500 grid">
              Destination
              <span className="font-bold">{destination}</span>
            </p>
          </div>
          <div className="flex flex-col p-2 pr-5 border-r">
            <p className="text-gray-500 grid">
              Available
              <span className="font-bold text-center">{availability}</span>
            </p>
          </div>
        </div>
        <div className="mt-2 md:mt-4 lg:mt-4 mx-auto md:mx-0 lg:mx-0 flex flex-row flex-wrap md:flex-nowrap justify-end items-baseline">
          <div className=" mx-6 md:border-dotted flex flex-col md:flex-row lg:flex-row py-4 mr-6 flex-wrap">
            <div className="text-sm mx-6 md:mx-10 lg:mx-10 flex flex-col mb-3 md:mb-0 lg:mb-0">
              <p>Standard Ticket</p>
              <p className="font-bold text-lg">${price}</p>
              <p className="text-xs text-gray-500">Price per adult</p>
            </div>
            <button
              className={`w-28 h-10 mx-auto mt-2 ml-5 md:ml-0 lg:ml-0 md:mt-0 lg:mt-1 rounded flex border-solid border text-white ${
                buttonStatus ? "bg-blue-800" : "bg-green-600"
              } justify-center mt-2 place-items-center transition-color duration-200`}
              onClick={(e) => {
                e.preventDefault();
                setButtonStatus(!buttonStatus);
                buttonStatus ? notifyError() : notifySuccess();
              }}
            >
              <ToastContainer />
              <div className="">{buttonStatus ? "Reserved" : "Book"} </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightsCard;

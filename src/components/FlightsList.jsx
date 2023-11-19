import { useEffect, useState } from "react";
import useFlights from "../hooks/useFlights";
import FlightsCard from "./FlightsCard";
import { RxCrossCircled } from "react-icons/rx";
import Pagination from "./Pagination";
import useRemoveFilter from "../hooks/useRemoveFilter";

const FlightsList = () => {
  const { flights, setFlights, copyFlights } = useFlights();
  const { buttonStatus, setButtonStatus } = useRemoveFilter();

  const [currentPage, setCurrentPage] = useState(1);

  const flightsPerPage = 15;
  const pageCount = Math.ceil(flights.length / flightsPerPage);
  const offset = currentPage * flightsPerPage;
  const currentFlights =
    flights.length <= flightsPerPage
      ? flights.sort((a, b) => a.price - b.price)
      : flights
          .slice(offset, offset + flightsPerPage)
          .sort((a, b) => a.price - b.price);

          
  // const groupedFlights = {};
  // flights.forEach((flight) => {
  //   if (!groupedFlights[flight.data]) {
  //     groupedFlights[flight.data] = [];
  //   }
  //   groupedFlights[flight.data].push(flight);
  // });

  const handleClick = () => {
    setFlights(copyFlights);
    setButtonStatus(false);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [flights]);

  return (
    <>
      <div>
        <div className="p-5 md:p-10 lg:p-10">
          <div className="max-w-full  bg-white flex flex-col rounded overflow-hidden shadow-lg">
            <div className="flex flex-row items-baseline flex-nowrap bg-gray-100 p-2">
              <h1 className="ml-2 uppercase font-bold text-gray-500">
                departure
              </h1>
              <p className="ml-2 font-normal text-gray-500">Flights</p>
            </div>
            <div className="mt-2 flex justify-between bg-white p-2">
              <div className="flex mx-2 ml-6 h8 px-2 flex-row items-center rounded-full bg-gray-100 p-1">
                <p className="font-normal text-sm ml-1 text-gray-500">
                  Economy
                </p>
              </div>
              <button
                className={`flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-300 p-1 py-2 mr-5 ${
                  buttonStatus ? "visible" : "invisible"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick();
                }}
              >
                <p className="font-normal flex flex-row items-center gap-2 text-sm mx-2 text-gray-500">
                  <RxCrossCircled className="text-red-600 h-5 w-5" /> 
                  Remove filters
                </p>
              </button>
            </div>
            <div className="text-center py-12 md:py-2 xl:py-2">
              {currentFlights.length > 0
                ? currentFlights.map((flight, index) => (
                    <div key={index}>
                      <FlightsCard key={index} flight={flight} />
                    </div>
                  ))
                : buttonStatus
                ? "Not flights found"
                : "Loading..."}
            </div>
            <div>
              <Pagination
                totalPosts={pageCount}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalFlights={flights.length}
                flightsCount={offset}
                currentFlights={currentFlights.length}
                flightsPerPage={flightsPerPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightsList;

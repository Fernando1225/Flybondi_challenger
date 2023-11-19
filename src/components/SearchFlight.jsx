import { MdOutlineFlightTakeoff, MdOutlineFlightLand, MdDateRange, MdPriceCheck } from "react-icons/md";

const SearchFlight = (props) => {
  const { handleChange, handleClickFunction } = props;
  return (
    <>
      <div className="pt-5 bg-transparent">
        <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
          <div className="p-6 flex flex-col  border-x-2 border-yellow-300 gap-3 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col md:flex-row">
              <div className="pt-6 md:pt-0 md:pl-6">
                <select className="border p-2 mb-4 lg:mb-0 md:mb-0 rounded">
                  <option>Economy</option>
                </select>
              </div>
              <select 
              className=" p-2 h-full border rounded mx-5"
              name="availability"
              onChange={handleChange}
              >
                <option value={1}>1 Passanger</option>
                <option value={2}>2 Passangers</option>
                <option value={3}>3 Passangers</option>
                <option value={4}>4 Passangers</option>
                <option value={5}>5 Passangers</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid grid-cols-2 gap-3 border border-gray-200 p-2 rounded">
                <div className="flex border rounded bg-gray-300 gap-2 items-center p-2 ">
                  <MdOutlineFlightTakeoff />
                  <input
                    type="text"
                    placeholder="From... (ex: COR)"
                    className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
                    name="origin"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex border rounded gap-2 bg-gray-300 items-center p-2 ">
                  <MdOutlineFlightLand />

                  <input
                    type="text"
                    placeholder="To... (ex: MDZ)"
                    className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
                    name="destination"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
                <div className="flex border gap-2 rounded bg-gray-300 items-center p-2 ">
                  <MdDateRange />
                  <input
                    type="text"
                    placeholder="Date...  (ex: 2021-11-15)"
                    className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
                    name="date"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex border gap-2 rounded bg-gray-300 items-center p-2 ">
                  <MdPriceCheck />
                  <input
                    type="text"
                    placeholder="Price limit... (ex: 400)"
                    className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
                    name="price"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="p-2 mt-2 border w-1/4 rounded-md bg-blue-800 hover:bg-blue-900 transition-colors duration-200  text-white"
                onClick={(e) => {
                  e.preventDefault();
                  handleClickFunction();
                }}
              >
                <span className="hidden md:block lg:block">Search flights</span>
                <span className="block md:hidden lg:hidden">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default SearchFlight;

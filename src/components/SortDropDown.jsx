import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import useCountries from "../hooks/useContries";


const SortDropdown = ({ handleClickFunction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { countries } = useCountries();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClick = (option) => {
    handleClickFunction(option, countries); 
    closeDropdown();
  }; 
  

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="flex gap-3 px-4 py-2 text-sm items-center text-gray-700 hover:bg-gray-100 hover:bg-transparent border-b-2 border-transparent hover:border-teal-800 rounded-md"
        onClick={toggleDropdown}
      >
        Sort By <IoIosArrowDown />
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-32 mt-2 bg-white rounded-md shadow-lg">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                handleClick("Name");
              }}
            >
              Name
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                handleClick("Continent");
              }}
            >
              Continent
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                handleClick("Population");
              }}
            >
              Population
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                handleClick("Language");
              }}
            >
              Language
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortDropdown;

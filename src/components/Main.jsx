import { useState } from "react";
import SearchFlight from "./SearchFlight";
import useFlights from "../hooks/useFlights";
import useRemoveFilter from "../hooks/useRemoveFilter";

const Main = () => {
  const { setFlights, copyFlights } = useFlights();
  const { setButtonStatus } = useRemoveFilter();

  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    date: "",
    availability: "",
    price: "",
  });

  const filterFlights = (formData) => {
    let flightsFiltered = copyFlights;

    formData.origin !== ""
      ? (flightsFiltered = flightsFiltered.filter(
          (flight) => flight.origin === formData.origin
        ))
      : flightsFiltered;
    formData.destination !== ""
      ? (flightsFiltered = flightsFiltered.filter(
          (flight) => flight.destination === formData.destination
        ))
      : flightsFiltered;
    formData.price !== ""
      ? (flightsFiltered = flightsFiltered.filter(
          (flight) => flight.price <= formData.price
        ))
      : flightsFiltered;
    formData.date !== ""
      ? (flightsFiltered = flightsFiltered.filter(
          (flight) => flight.data === formData.date
        ))
      : flightsFiltered;
    formData.availability !== ""
      ? (flightsFiltered = flightsFiltered.filter(
          (flight) => flight.availability >= formData.availability
        ))
      : flightsFiltered;

    setFlights(flightsFiltered);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.toUpperCase(),
    });
  };

  const handleClickFunction = () => {
    Object.values(formData).every((value) => value === "")
      ? null
      : (setButtonStatus(true), filterFlights(formData));
  };

  return (
    <>
      <section className="bg-center bg-no-repeat bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.intriper.com%2Fwp-content%2Fuploads%2F2019%2F08%2F15122858%2FFotoJet.jpg&f=1&nofb=1&ipt=65f61bf65270d2599a70ada2507f37b9cf7b284ba51c5fc5ee43cb27ef01989e&ipo=images')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-52">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl pb-2">
            Welcome to Fybondi, your go-to page for flights!
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            We are thrilled to have you here and look forward to helping you
            plan your next adventure! To find the perfect flight, simply input
            any camp or location you wish to search in the search bar below.
          </p>

          <SearchFlight
            handleChange={handleChange}
            handleClickFunction={handleClickFunction}
          />
        </div>
      </section>
    </>
  );
};

export default Main;

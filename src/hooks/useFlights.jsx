import { useContext } from "react";
import FlightsContext from "../context/FlightsProvider";

const useFlights = () => {
  return useContext(FlightsContext);
};

export default useFlights;

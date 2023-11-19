import { useState, useEffect, createContext } from "react";
import data from "../data/dataset.json";
import axios from "axios";

const FlightsContext = createContext();

const FlightsProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [copyFlights, setCopyFlights] = useState([])
  const [totalFlights, setTotalFlights] = useState(0);
  

  useEffect(() => {
    const fetchData = async () => {
      // const data = require('./dataset.json');
      // const { data } = await axios.get("./src/data/dataset.json");
      const dataOrdered = data.sort((a, b) => new Date(a.data) - new Date(b.data));
      // const dataOrdered = data.sort((a, b) => a.price - b.price);

      setFlights(dataOrdered);
      setCopyFlights(dataOrdered);
      setTotalFlights(dataOrdered.length);
    };
    fetchData();
  }, []);

  return (
    <FlightsContext.Provider
      value={{
        flights,
        setFlights,
        totalFlights,
        copyFlights,
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

export { FlightsProvider };

export default FlightsContext;

import { useState, createContext } from "react";

const RemoveFilterContext = createContext();

const RemoveFilterProvider = ({ children }) => {
  const [buttonStatus, setButtonStatus] = useState(false);

  return (
    <RemoveFilterContext.Provider
      value={{
        buttonStatus,
        setButtonStatus,
      }}
    >
      {children}
    </RemoveFilterContext.Provider>
  );
};

export { RemoveFilterProvider };

export default RemoveFilterContext;

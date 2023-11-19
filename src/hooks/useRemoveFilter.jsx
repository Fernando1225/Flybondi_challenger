import { useContext } from "react";
import RemoveFilterContext from "../context/RemoveFilterProvider";

const useRemoveFilter = () => {
  return useContext(RemoveFilterContext);
};

export default useRemoveFilter;

import { useContext } from "react";
import { BarDataContext } from "../Context/BarDataContext";

function useBarData() {
  return useContext(BarDataContext);
}

export { useBarData };

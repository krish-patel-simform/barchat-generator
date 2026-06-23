import { createContext } from "react";
import type { BarData } from "../reducer/barDataReducer";

export const BarDataContext = createContext<BarData>({
  id: "1234",
  xLabel: "X Axis",
  yValue: 0,
});

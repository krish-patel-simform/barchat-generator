import type React from "react";
import type { BarDataAction, BarDataState } from "../../reducer/barDataReducer";

export type BarDataEditorProps = {
  data: BarDataState;
  dispatchBarData: React.Dispatch<BarDataAction>;
};

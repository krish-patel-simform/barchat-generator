import style from "./main.module.css";
import BargraphInput from "../BargraphInput/BargraphInput";
import BarGraph from "../BarGraph/BarGraph";
import { useReducer, useRef } from "react";
import type { BarGraphInputRefs } from "../BargraphInput/barGraphInput.type";
import {
  barDataReducer,
  initBarDataState,
  type BarData,
} from "../../reducer/barDataReducer";
import BarDataEditor from "../BarDataEditor/BarDataEditor";
import { nanoid } from "nanoid";

export default function Main() {
  const [barData, dispatchBarData] = useReducer(
    barDataReducer,
    initBarDataState,
  );

  const barGraphInputRefs = useRef<BarGraphInputRefs>(null);

  function handleGenerateBarGarph() {
    const labelRef = barGraphInputRefs.current?.xLabelRef;
    const valueRef = barGraphInputRefs.current?.yValueRef;

    if (!labelRef || !valueRef) return;

    const label = labelRef.value;
    const value = Number(valueRef.value);

    if (!label) {
      alert("Please Enter X label");
      return;
    } else if (value < 0) {
      alert("Please enter positive data");
      return;
    } else {
      const bardata: BarData = {
        xLabel: label,
        yValue: value,
        id: nanoid(4),
      };
      dispatchBarData({ type: "insert", payload: { newData: bardata } });
      labelRef.value = "";
      valueRef.value = "";
    }
  }

  return (
    <div className={`${style.mainContainer}`}>
      <section className={`section ${style.mainBargraphInput}`}>
        <BargraphInput
          onGenerate={handleGenerateBarGarph}
          ref={barGraphInputRefs}
        />
        <BarDataEditor dispatchBarData={dispatchBarData} data={barData} />
      </section>

      <BarGraph data={barData} />
    </div>
  );
}

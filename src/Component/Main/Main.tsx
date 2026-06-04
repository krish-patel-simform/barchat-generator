import style from "./main.module.css";
import BargraphInput from "../BargraphInput/BargraphInput";
import BarGraph from "../BarGraph/BarGraph";
import { useRef, useState } from "react";
import type { BarGraphInputRefs } from "../BargraphInput/barGraphInput.type";
import type { BarData } from "../BarGraph/barGraph.type";

export default function Main() {
  const [barData, setBarData] = useState<BarData[]>([]);

  const barGraphInputRefs = useRef<BarGraphInputRefs>(null);

  function handleGenerateBarGarph() {


    const labelRef = barGraphInputRefs.current?.xLabelRef;
    const valueRef = barGraphInputRefs.current?.yValueRef;

    if(!labelRef || !valueRef)
        return 

    const label = labelRef.value;
    const value = Number(valueRef.value);

    if (label && value) {
      setBarData((prev) => [...prev, { label, value }]);
      console.log("inside an if");
    }
    labelRef.value = '';
    valueRef.value = ''
  }

  return (
    <div className={`${style.mainContainer}`}>
      <section className={`${style.mainBargraphInput}`}>
        <BargraphInput
          onGenerate={handleGenerateBarGarph}
          ref={barGraphInputRefs}
        />
      </section>
      <section className={`${style.mainBarGraph}`}>
        <BarGraph data={barData} />
      </section>
    </div>
  );
}

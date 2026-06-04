import style from "./bargraphInput.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { BarChartBigIcon } from "lucide-react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import type {
  BargraphInputProps,
  BarGraphInputRefs,
} from "./barGraphInput.type";

const BargraphInput = forwardRef<BarGraphInputRefs, BargraphInputProps>(
  ({ onGenerate }, ref) => {
    const xLabelRef = useRef<HTMLInputElement>(null);
    const yValueRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
        return {
          xLabelRef: xLabelRef.current,
          yValueRef: yValueRef.current,
        };
    });

    return (
      <div className={`${style.bargraphInput}`}>
        <p>Enyer Chart Data</p>
        <section>
          <h6>X-Axis Labels</h6>
          <Input ref={xLabelRef} type="text" name="x-axis" />
        </section>
        <section>
          <h6>Y-Axis Value</h6>
          <Input ref={yValueRef} type="number" name="y-value" />
        </section>
        <section>
          <Button
            mode="Primary"
            title="Generate Chart"
            leftIcon={<BarChartBigIcon />}
            onClick={onGenerate}
          />
        </section>
      </div>
    );
  },
);

export default BargraphInput;

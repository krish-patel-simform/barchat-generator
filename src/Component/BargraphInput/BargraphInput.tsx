import style from "./bargraphInput.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { BarChartBigIcon, DeleteIcon } from "lucide-react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import type {
  BargraphInputProps,
  BarGraphInputRefs,
} from "./barGraphInput.type";

import { BarChart3Icon } from "lucide-react";

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
        <section
          className={` ${style.bargraphInputTitleContainer} ${style.heading}`}
        >
          <BarChart3Icon />
          <p>Enter Chart Data</p>
        </section>
        <section className={`${style.bargraphInputSection}`}>
          <h6 className={`${style.heading}`}>X-Axis Labels</h6>
          <Input
            ref={xLabelRef}
            type="text"
            name="x-axis"
            placeholder="Enter label (e.g.,Jan)"
          />
        </section>
        <section className={`${style.bargraphInputSection}`}>
          <h6 className={`${style.heading}`}>Y-Axis Value</h6>
          <Input
            ref={yValueRef}
            type="number"
            name="y-value"
            placeholder="Enter value (e.g.,20)"
          />
        </section>
        <section className={`${style.bargraphInputActions}`}>
          <Button
            mode="Primary"
            title="Generate Chart"
            leftIcon={<BarChartBigIcon />}
            onClick={onGenerate}
          />
          <Button
            leftIcon={<DeleteIcon />}
            mode="Secondary"
            title="Delete All"
            outlineColor="Red"
          />
        </section>
      </div>
    );
  },
);

export default BargraphInput;

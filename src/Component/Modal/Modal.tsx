import type { BarData } from "../../reducer/barDataReducer";
import React from "react";

import style from "./modal.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

type ModalProps = {
  data: BarData;
  onEdit: (editedData: BarData) => void;
  onCancle: () => void;
};

export default function Modal({ data, onEdit, onCancle }: ModalProps) {
  const { xLabel, yValue } = data;

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const rawXLabel = formData.get("xLabel");
    const xLabel = typeof rawXLabel === "string" ? rawXLabel : null;
    const rawYValue = Number(formData.get("yValue"));
    const yValue = typeof rawYValue === "number" ? rawYValue : -1;

    if (xLabel && validate(xLabel, yValue)) {
      const editedData: BarData = {
        id: data.id,
        xLabel: xLabel,
        yValue: yValue,
      };
      onEdit(editedData);
    }
  }

  function validate(xLabel: string | null, yValue: number) {
    if (!xLabel) {
      alert("x Axis value can not be empty");
      return false;
    } else if (!yValue && yValue < 0) {
      alert("YAxis value must be psotive integer");
      return false;
    }
    return true;
  }

  return (
    <div className={`${style.modalContainer}`}>
      <form onSubmit={handleSubmit} className={`${style.modal}`}>
        <h1>Edit Chart</h1>
        <div>
          <p>X-Axis</p>
          <Input type="text" name="xLabel" defaultValue={xLabel} />
        </div>
        <div>
          <p>Y-Value</p>
          <Input type="number" name="yValue" defaultValue={yValue} />
        </div>
        <div className={`${style.modalActions}`}>
          <Button mode="Primary" title="Save" type="submit" />
          <Button
            mode="Secondary"
            title="Cancle"
            outlineColor="Gray"
            onClick={onCancle}
          />
        </div>
      </form>
    </div>
  );
}

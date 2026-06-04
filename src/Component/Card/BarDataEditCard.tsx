import style from "./barDataEditCard.module.css";
import Button from "../UI/Button/Button";
import type { BarData, BarDataAction } from "../../reducer/barDataReducer";
import React, { useState } from "react";
import Modal from "../Modal/Modal";

type BarDataEditCardProps = {
  data: BarData;
  dispatchBarData: React.Dispatch<BarDataAction>;
};

export default function BarDataEditCard({
  data,
  dispatchBarData,
}: BarDataEditCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleEditBtnClick() {
    setIsModalOpen((prev) => !prev);
  }

  function handleOnEdit(editedBardata: BarData) {
    dispatchBarData({ type: "edit", payload: { editedData: editedBardata } });
    setIsModalOpen(false);
  }

  function handleDeleteBtnClick() {
    dispatchBarData({ type: "delete", payload: { id: data.id } });
  }

  return (
    <>
      {isModalOpen && <Modal data={data} onEdit={handleOnEdit} />}
      <div className={`${style.barDataEditCard}`}>
        <div>
          <p>X Axis Label : {data.xLabel}</p>
          <p>Y Axis label : {data.yValue}</p>
          <div className={`${style.barDataEditCardActions}`}>
            <Button mode="Primary" title="Edit" onClick={handleEditBtnClick} />
            <Button
              mode="Secondary"
              title="Delete"
              onClick={handleDeleteBtnClick}
              outlineColor="Red"
            />
          </div>
        </div>
      </div>
    </>
  );
}

import style from "./barDataEditCard.module.css";
import type { BarData, BarDataAction } from "../../reducer/barDataReducer";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { EditIcon, Trash2 } from "lucide-react";

type BarDataEditCardProps = {
  data: BarData;
  dispatchBarData: React.Dispatch<BarDataAction>;
  index: number;
};

export default function BarDataEditCard({
  index,
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

  function handleOnCancle() {
    setIsModalOpen(false);
  }

  return (
    <>
      {isModalOpen && (
        <Modal data={data} onCancle={handleOnCancle} onEdit={handleOnEdit} />
      )}
      <div className={`${style.barDataEditCard}`}>
        <div className={`${style.flexSection}`}>
          <p className={`${style.barDataEditCardId}`}>{index + 1}</p>
          <p>{data.xLabel}</p>
        </div>
        <div>
          <p>{data.yValue}</p>
        </div>
        <div className={`${style.barDataEditCardActions}`}>
          <EditIcon
            className={`${style.barEditCardIcons}`}
            color="#5c64ee"
            onClick={handleEditBtnClick}
          />
          <Trash2
            className={`${style.barEditCardIcons}`}
            color="red"
            onClick={handleDeleteBtnClick}
          />
        </div>
      </div>
    </>
  );
}

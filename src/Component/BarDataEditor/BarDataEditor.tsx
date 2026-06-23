import BarDataEditCard from "../Card/BarDataEditCard";
import type { BarDataEditorProps } from "./barDataEditor.type";

import style from "./barDataEditor.module.css";
import Button from "../UI/Button/Button";
import { Trash2 } from "lucide-react";

export default function BarDataEditor({
  data,
  dispatchBarData,
}: BarDataEditorProps) {
  function handleDeleteAll() {
    dispatchBarData({ type: "deleteAll" });
  }

  return (
    <div className={`${style.barDataEditorContainer}`}>
      <div className={`${style.barDataEditCardHeader}`}>
        <h6 className={`${style.barDataEditCardHeadering}`}>
          Data Entries({data.length})
        </h6>
        <Button
          leftIcon={<Trash2 />}
          mode="Secondary"
          title="Delete All"
          outlineColor="Red"
          onClick={handleDeleteAll}
        />
      </div>
      {data.map((barData, index) => {
        return (
          <BarDataEditCard
            dispatchBarData={dispatchBarData}
            key={barData.id}
            data={barData}
            index={index}
          />
        );
      })}
    </div>
  );
}

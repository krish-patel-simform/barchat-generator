import BarDataEditCard from "../Card/BarDataEditCard";
import type { BarDataEditorProps } from "./barDataEditor.type";

import style from "./barDataEditor.module.css";

export default function BarDataEditor({
  data,
  dispatchBarData,
}: BarDataEditorProps) {
  return (
    <div className={`${style.barDataEditorContainer}`}>
      {data.map((barData) => {
        return (
          <BarDataEditCard
            dispatchBarData={dispatchBarData}
            key={barData.id}
            data={barData}
          />
        );
      })}
    </div>
  );
}

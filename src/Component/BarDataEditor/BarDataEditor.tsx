import BarDataEditCard from "../Card/BarDataEditCard";
import type { BarDataEditorProps } from "./barDataEditor.type";

export default function BarDataEditor({
  data,
  dispatchBarData,
}: BarDataEditorProps) {
  return (
    <div>
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

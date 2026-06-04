import type { BarGraphProps, BarProps } from "./barGraph.type";
import style from "./barGraph.module.css";

const MAX_BAR_HEIGHT = 300;

const Bar = ({ xLabel, height }: BarProps) => {
  return (
    <section className={`${style.barContainer}`}>
      <div style={{ height: `${height}px` }} className={`${style.bar}`}></div>
      <span className={`${style.barContainerLabel}`}>{xLabel}</span>
    </section>
  );
};

export default function BarGraph({ data }: BarGraphProps) {
  console.log("in graph :", data);
  const maxValue = data?.reduce(
    (acc, obj) => Math.max(acc, obj.yValue),
    Number.NEGATIVE_INFINITY,
  );

  return (
    <div>
      <section className={`${style.barGraphContainer}`}>
        {data.map((obj) => {
          const height = (obj.yValue / maxValue) * MAX_BAR_HEIGHT;
          return (
            <Bar xLabel={obj.xLabel} yValue={obj.yValue} height={height} />
          );
        })}
      </section>
    </div>
  );
}

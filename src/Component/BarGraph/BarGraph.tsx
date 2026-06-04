import type { BarGraphProps, BarProps } from "./barGraph.type";
import style from "./barGraph.module.css";

export default function BarGraph({ data }: BarGraphProps) {
  console.log("in graph :", data);
  const maxValue = data?.reduce(
    (acc, obj) => Math.max(acc, obj.yValue),
    Number.NEGATIVE_INFINITY,
  );

  return (
    <section className={`${style.barGraphContainer}`}>
      {data.map((obj) => {
        const height = (obj.yValue / maxValue) * MAX_BAR_HEIGHT;
        return (
          <Bar
            key={obj.id}
            xLabel={obj.xLabel}
            yValue={obj.yValue}
            height={height}
          />
        );
      })}
    </section>
  );
}

const MAX_BAR_HEIGHT = 100;

const Bar = ({ xLabel, height }: BarProps) => {
  return (
    <section className={`${style.barContainer}`}>
      <div style={{ height: `${height}%` }} className={`${style.bar}`}></div>
      <span className={`${style.barContainerLabel}`}>{xLabel}</span>
    </section>
  );
};

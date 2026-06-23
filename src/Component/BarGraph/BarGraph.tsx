import type { BarGraphProps, BarProps } from "./barGraph.type";
import style from "./barGraph.module.css";

export default function BarGraph({ data }: BarGraphProps) {
  console.log("in graph :", data);
  const maxValue = data?.reduce(
    (acc, obj) => Math.max(acc, obj.yValue),
    Number.NEGATIVE_INFINITY,
  );

  const gap = maxValue / 10;

  console.log("Gap : ", gap);
  console.log(maxValue / 10);

  const intervals = Array.from({ length: 11 }, (_, index) =>
    index === 10 ? maxValue : (gap * index).toFixed(2),
  ).reverse();

  return (
    <section className={`section ${style.barGraphContainer}`}>
      <div className={`${style.barGraphIntervals}`}>
        {maxValue !== Number.NEGATIVE_INFINITY &&
          intervals.map((interval, index) => {
            return <span key={index}>{`${interval}-`}</span>;
          })}
      </div>
      <div className={`${style.allBarContainer}`}>
        {data.map((obj) => {
          const height = (obj.yValue / maxValue) * MAX_BAR_HEIGHT;
          console.log(obj.id);
          return (
            <Bar
              key={obj.id}
              xLabel={obj.xLabel}
              yValue={obj.yValue}
              height={height}
            />
          );
        })}
      </div>
    </section>
  );
}

const MAX_BAR_HEIGHT = 100;

const Bar = ({ xLabel, height, yValue }: BarProps) => {
  return (
    <section className={`${style.barContainer}`}>
      <div style={{ height: `${height}%` }} className={`${style.bar}`}>
        <span className={`${style.barContainerValue}`}>{yValue}</span>
        <span className={`${style.barContainerLabel}`}>{xLabel}</span>
      </div>
    </section>
  );
};

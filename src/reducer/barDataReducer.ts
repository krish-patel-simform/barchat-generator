export type BarData = {
  xLabel: string;
  yValue: number;
};

export type BarDataState = BarData[];

export const initBarDataState: BarDataState = [];

export type BarDataAction =
  | { type: "insert"; payload: BarData }
  | { type: "delete"; payload: number }
  | { type: "deleteAll" };

export function barDataReducer(
  prevState: BarDataState,
  action: BarDataAction,
): BarDataState {
  switch (action.type) {
    case "insert": {
      const barData = action.payload;
      return [...prevState, barData];
    }
    case "delete": {
      return prevState;
    }
    case "deleteAll": {
      return prevState;
    }
    default: {
      return prevState;
    }
  }
}

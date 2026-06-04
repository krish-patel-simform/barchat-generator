export type BarData = {
  xLabel: string;
  yValue: number;
  id: string;
};

export type BarDataState = BarData[];

export const initBarDataState: BarDataState = [];

export type BarDataAction =
  | { type: "insert"; payload: { newData: BarData } }
  | { type: "delete"; payload: { id: string } }
  | { type: "edit"; payload: { editedData: BarData } }
  | { type: "deleteAll" };

export function barDataReducer(
  prevState: BarDataState,
  action: BarDataAction,
): BarDataState {
  switch (action.type) {
    case "insert": {
      const { newData } = action.payload;
      return [...prevState, newData];
    }
    case "edit": {
      const { editedData } = action.payload;
      const editedDataIndex = prevState.findIndex(
        (barData) => barData.id === editedData.id,
      );

      const prefix = prevState.slice(0, editedDataIndex);
      const sufix = prevState.slice(editedDataIndex + 1);

      return [...prefix, editedData, ...sufix];
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

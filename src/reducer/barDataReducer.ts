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
      return prevState.map((entry) =>
        entry.id === editedData.id ? editedData : entry,
      );
    }
    case "delete": {
      const id = action.payload.id;
      const filterBarData = prevState.filter((barData) => barData.id !== id);
      return filterBarData;
    }
    case "deleteAll": {
      return [];
    }
    default: {
      return prevState;
    }
  }
}

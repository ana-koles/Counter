import { v1 } from 'uuid';

export type ValueType = {
  id: string;
  title: string;
  value: number;
  isValid: boolean;
};

export const valuesList = {
  max: 'min-value',
  min: 'max-value',
};

export let incStep = 1;

const initialState = [
  { id: v1(), title: valuesList.max, value: 0, isValid: true },
  { id: v1(), title: valuesList.min, value: 0, isValid: true },
];

export type InitialStateType = typeof initialState

type ChangeValueAT = ReturnType<typeof changeValueAC>;
type ChangeValidationAT = ReturnType<typeof changeValidationAC>;

export type CounterActionType =
  | ChangeValueAT
  | ChangeValidationAT

export const setterReducer = (state: ValueType[] = initialState, action: CounterActionType): ValueType[] => {
  switch (action.type) {
    case 'CHANGE-VALUE': {
      return state.map((v) =>
        v.id === action.valueId ? { ...v, value: action.value } : v
      );
    }

    case 'CHANGE-VALIDATION-STATUS': {
      return state.map((v) =>
        v.id === action.valueId ? { ...v, isValid: action.isValid } : v
      );
    }

    default: {
      return state;
    }
  }
};

export const changeValueAC = (valueId: string, value: number) => {
  return { type: 'CHANGE-VALUE', valueId, value } as const;
};

export const changeValidationAC = (valueId: string, isValid: boolean) => {
  return { type: 'CHANGE-VALIDATION-STATUS', valueId, isValid } as const;
};

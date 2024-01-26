import { v1 } from 'uuid';


const initialState = {
  currentValue: 0
};

export type DisplayInitialStateType = typeof initialState

type SetCurrentValueAT = ReturnType<typeof setCurrentValueAC>;


export type CounterDisplayActionType = SetCurrentValueAT;

export const displayReducer = (state: DisplayInitialStateType = initialState, action: SetCurrentValueAT): DisplayInitialStateType => {
  switch (action.type) {
    case 'display/SET-CURRENT-VALUE': {
      return {...state, currentValue: action.value}
    }

    default: {
      return state;
    }
  }
};

export const setCurrentValueAC = (value: number) => {
  return { type: 'display/SET-CURRENT-VALUE', value } as const;
};


export type ActionType = upadeValueAT;
const initialState = {
  value: 0
}
type InitialStateType = typeof initialState

export const valueReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

  switch(action.type) {
    case 'UPDATE-VALUE':
    return {...state, value: action.value}

    default: {
      return state;
    }
  }

}

type upadeValueAT = ReturnType<typeof upadeValueAC>

export const upadeValueAC = ( value: number) => {
  return {type: 'UPDATE-VALUE', value } as const
};
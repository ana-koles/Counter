import {v1} from 'uuid'

export type ValueType = {
  id: string
  title: string
  value: number
  isValid: boolean
}

export const titlesList = {
  max: 'max value',
  min: 'min value',
};

export const valueId = {
  maxId: v1(),
  minId: v1()
}

export type ValuesType = ValueType[]

const initialState: ValuesType  = [
  {id: valueId.maxId, title: titlesList.max, value: 0, isValid: true},
  {id: valueId.minId, title: titlesList.min, value: 0, isValid: true}
];

type ChangeValueType = {
  type: 'CHANGE-VALUE'
  valueId: string
  value: number
}

type ChangeValidationType = {
  type: 'CHANGE-VALIDATION-STATUS'
  valueId: string
  isValid: boolean
}

type ActionType = ChangeValueType | ChangeValidationType

export const valueReducer = (state: ValuesType = initialState, action: ActionType): ValuesType => {

  switch(action.type) {
    case 'CHANGE-VALUE': {
      return state.map(v => v.id === action.valueId ? {...v, value: action.value} : v);
    }

    case 'CHANGE-VALIDATION-STATUS': {
      return state.map(v => v.id === action.valueId ? {...v, isValid: action.isValid} : v);
    }

    default: {
      return state;
    }
  }

}


export const changeValueAC = (valueId: string , value: number): ChangeValueType => {
  return {type: 'CHANGE-VALUE', valueId: valueId, value: value } as const
}

export const changeValidationAC = (valueId: string , isValid: boolean): ChangeValidationType => {
  return {type: 'CHANGE-VALIDATION-STATUS', valueId: valueId, isValid: isValid } as const
}
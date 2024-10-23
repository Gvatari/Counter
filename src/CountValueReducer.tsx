import React from 'react';

export type countData = {
    startValue: number
    maxValue: number
  }

 export const countReducer = (state: countData, action: countReducerType):countData  => {
    switch (action.type) {
      case 'SET-VALUE-COUNTER':
        return action.payload.value
      default:
        return state
    }
  }

  type countReducerType = countReducerACType
  type countReducerACType = ReturnType<typeof countReducerAC>

 export const countReducerAC = (value: countData) => {
    return {
      type: 'SET-VALUE-COUNTER',
      payload: {
        value
      }
    } as const
  }
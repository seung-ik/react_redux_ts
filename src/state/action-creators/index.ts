import {Dispatch} from 'redux'
import { ActionTypes } from '../action-types'
import { Action } from '../actions'

export const depositMoney = (amount:number)=>{
  return (dispatch:Dispatch<Action>)=>{
    dispatch({
      type:ActionTypes.DEPOSIT,
      payload:amount
    })
  }
}

export const withDrawMoney = (amount:number)=>{
  return (dispatch:Dispatch<Action>)=>{
    dispatch({
      type:ActionTypes.WITHDRAW,
      payload:amount
    })
  }
}

export const bankruptMoney = ()=>{
  return (dispatch:Dispatch<Action>)=>{
    dispatch({
      type:ActionTypes.BANKRUPT
    })
  }
}
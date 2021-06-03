// 리듀서는 뭐하는 거냐면은 음 store 안에서 state 를 액션을 확인하고 state 를 newstate 로 바꾸는 함수야 
// 액션의 형식 은 type 과 payload >> reducer에서는 탕ㅂ을 확인한 이후 payload 의 값을 이용해 state 값에 변화를 준다.
import {Action} from "../actions"

const initialState = 0 ;

const reducer = (state: number = initialState, action:Action) : number=>{
  switch(action.type){
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    case "bankrupt":
      return 0;

    default :
      return state
  }
}

export default reducer
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators, State} from './state'

//usedispatch 는 변경사항을 저장해줄때 
//useselector 는 변경사항을 불러올때

function App() {
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney, bankrupt } =bindActionCreators(actionCreators,dispatch)
  const amount = useSelector((state : State) => state.bank)
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={()=>depositMoney(1000)}>deposit</button>
      <button onClick={()=>withdrawMoney(500)}>withdraw</button>
      <button onClick={bankrupt}>bankrupt</button>
    </div>
  );
}

export default App;

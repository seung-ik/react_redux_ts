import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from './state'
import { State } from './state/reducers';



function App() {
  const dispatch =useDispatch()
  const {depositMoney,withDrawMoney,bankruptMoney} = bindActionCreators(actionCreators,dispatch)

  const amount = useSelector((state:State)=>{
    return state.bank
  })
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button>deposit</button>
      <button>withdraw</button>
      <button>bankrupt</button>
    </div>
  );
}

export default App;

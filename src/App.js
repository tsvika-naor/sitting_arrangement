import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ServeWaitingList from './ServeWaitingList';
import OnePersonTable from './data/components/tabels/OnePersonTable';
import TwoPersonTable from './data/components/tabels/TwoPersonTable';

function App() {

const floor = require('./data/floor.json')
console.log(floor);

  return (
    <div className="App">
     <ServeWaitingList dataFromParent = {floor}></ServeWaitingList>
     <OnePersonTable dataFromParent={floor}></OnePersonTable>
     <TwoPersonTable dataFromParent={floor}></TwoPersonTable>
    </div>
  );
}

export default App;

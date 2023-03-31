import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Template from "./components2/Template";
import signup from "./components2/signup"
import LogAdd from "./components2/LoginAddress";
import PassWd from "./components2/Password";
import Button from "./components2/Button";

const  App3 = () => {
  console.log('in app3', Template)
  return (
    <div className="page">
    <Template>
      <LogAdd/>
      <PassWd/>
      <Button/>
    </Template>
    </div>

  ) 
    
}

// useEffect(() => {
//   console.log('in useEffect')
//   axios.get('http://15.164.230.202:3011/moni-app')
//     .then(res => console.log(res, 'in res'))
//   return () => {
//   }
// }, [])

export default App3;

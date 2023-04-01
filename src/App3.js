import { Provider } from "react-redux";
import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import { useDispatch } from "react-redux";
import { loginUser } from "react-redux";


function LoginComponent() {
  const dispatch = useDispatch();

  const [id, setId] = useState("")
  const [password,setPassward] = useState("")

  const [loading, setLoading] = useState("")
  const [msg, setMsg] = useState("");

  useEffect(() => {

  }, [msg])

  const LoginFunc = (e) => {
    e.preventDefault();
  }
  
  return (
    <>
    <Provider>
      <h1>LoginComponent</h1>
      <form onSubmit = {LoginFunc}>
        <label htmlfor="id">ID : </label>
        <input type="text" id="id" />
        <br />
        <label htmlfor="password">Password : </label>
        <input type = "password" />
        <br />
        <button type = "submit">로그인</button>
        <br />
          {msg}
      </form>
      </Provider>
    </>
  )
}


  
  // let body = {
  //   id : userId,
  //   password :  userPassword
  // };

  // axios.post("http://15.164.230.202:3011/moni-app, body")
  // .then((res) => {
  //   console.log(res.data)
  // })
    


// useEffect(() => {
//   console.log('in useEffect')
//   axios.get('http://15.164.230.202:3011/moni-app')
//     .then(res => console.log(res, 'in res'))
//   return () => {
//   }
// }, [])

export default LoginComponent;

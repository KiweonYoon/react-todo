import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {loginUser} from "../reducer/userSlice";
import App3 from "../App3";
import MyPage from "./MyPage";


const LoginComponent = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState("gdsfgdsf@gmail.com")
    const [password,setPassward] = useState("1234567890")
  
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");
    const loginFunc = (e) => {    //인터페이스의 preventDefault() 메서드는 어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정합니다.
        e.preventDefault();
        if(!id){
          return alert("ID를 입력하세요.");
        } else if(!password){
          return alert("Password를 입력하세요.");;  //HTML에서 a 태그나 submit 속성은 고유의 동작으로 페이지를 이동시키거나, <form> 안에 <input> 등을 전송하는 동작이 있다.
                                                //   버튼의 type="submit"으로 인해 로그인 버튼을 누르면 form이 전송되며 페이지가 리로드된다. 페이지가 리로드되면 원하는 작업을 할 수 없으므로 e.preventDefault();를 사용하여 이 현상을 막았다.
        } else {
          let body = {
            email: id,
            password
          };
    
          axios.post("http://15.164.230.202:3011/auth/login", body)
            .then((res) => {
                console.log(res.data, 'in ressss');
                if(res.data.statusCode === 201){
                    console.log("로그인");
                    dispatch(loginUser(res.data.result.access_token));
                    console.log('fdsafas')
                    
                }
            }).catch(e => {
                console.log(e.response.data.statusCode,' eeeeeeeee')
                if(e.response.data.statusCode === 401) {
                    alert('사백일 에러야')
                    setMsg("존재하지 않는 ID입니다");
                }
            });
        }
        setLoading(true);
    }
    return (
        <>
            <h1>LoginComponent</h1>
            <form onSubmit={loginFunc}>
                <label htmlFor="id">ID : </label>
                <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
                <br />
                <label htmlFor="password">Password : </label>
                <input type="password" value={password} onChange={(e) => setPassward(e.target.value)} />
                <br />
                <button type="submit" disabled={false}>로그인</button>
                <br />
                {msg}
            </form>
        </>
    );

}

export default LoginComponent;
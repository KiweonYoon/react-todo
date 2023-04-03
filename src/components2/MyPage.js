import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../reducer/userSlice";
import axios from "axios";


const MyPage = () => {
    // const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [id, setId] = useState(null);
    const LogoutFunc = () => {
        console.log("로그아웃");
        dispatch(clearUser());
    }
    const user = { name: 'name ' }
    return(
        <>
            <h1>Mypage</h1>
            <p>{user.name}님, 안녕하세요!</p>
            <button onClick={() => LogoutFunc()}>로그아웃</button>
            <div>모니터 앱 리스트 출력</div>
        </>

    )

    // const 
    //     axios.get("http://15.164.230.202:3011/moni-app")
    //     .then((response) => {
    //     console.log(response.data, 'in ressss');
    //     setId(response.data)
      
    // })}

}

export default MyPage;
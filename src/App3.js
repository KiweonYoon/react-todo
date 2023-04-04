import { Provider, useSelector } from "react-redux";


import './App.css';
import { useDispatch } from "react-redux";

import store from "./reducer/store";
import MyPage from "./components2/MyPage";
import LoginComponent from "./components2/LoginComponent";

function App3() {
  
  const dispatch = useDispatch();


  

  // useEffect(() => {
  //   if (msg) {
  //     setTimeout(() => {
  //       setMsg("");
  //       setLoading(false);
  //     }, 1500)
  //   }

  // }, [msg])

  
  const token = useSelector((state) => state.user.token)
  // console.log(a, "in a")
  const isLogin = token ? true : false;
   
  
    
  

  // 토큰이 중앙저장소에 있나요? 있으면 true 없으면 false겟지요.
  return (
  
    <Provider store={store}>
      {token ? <MyPage/> : <LoginComponent/>}
    </Provider>
    
  )
}
  // let body = 
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

export default App3;

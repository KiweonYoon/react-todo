import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../reducer/userSlice";
import axios from "axios";


const MyPage = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [selectedApps, setSelectedApps] = useState([]);
    
    
    const LogoutFunc = () => {
        console.log("로그아웃");
        localStorage.removeItem('token');
        dispatch(clearUser());
        window.location.reload();
        
    }

    const user = { name: 'name ' }

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token, 'in token')
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        axios.get("http://15.164.230.202:3011/moni-app")
            .then((response) => {
                console.log(response.data, 'in ressss');
                setData(response.data.result);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    
    const submitForm = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const formData = {
          id: event.target?.id?.value,
          appname: event.target?.appname?.value,
          keyword: event.target?.keyword?.value,
          country: event.target?.country?.value,
          storeId: event.target?.storeId?.value,
          store: event.target?.store?.value,
          
        };
        console.log(formData,"FormData!!")
        axios.post("http://15.164.230.202:3011/moni-app", formData)
          .then((response) => {
            console.log(response.data, "Response Data!");
            setData([...data, response.data.result]);
          })
          .catch(error => {
            console.log(error);
          });
      }

      const handleCheckboxChange = (event) => {
        const { checked, value } = event.target;
        if (checked) {
          setSelectedApps([...selectedApps, value]);
        } else {
          setSelectedApps(selectedApps.filter((id) => id !== value));
        }
        console.log(selectedApps);
      };
        
      
      const handleDeleteApps = (event = null) => {
        if (event) {
          event.preventDefault();
        }
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios
          .delete("http://15.164.230.202:3011/moni-app", {
            data: { ids: selectedApps },
          })
          .then((response) => {
            console.log(response.data);
            setData(data.filter((app) => !selectedApps.includes(app.id)));
            setSelectedApps([]);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    

    return(
        <>
            <h1>Mypage</h1>
            <p>{user.name}님, 안녕하세요!</p>
            <button onClick={() => LogoutFunc()}>로그아웃</button>
            <div>모니터 앱 리스트 출력</div>
            {data.map((app) => (
                <div key={app.id}>
                    <input 
                        type="checkbox" 
                        name="selectedApps" 
                        value={app.id}
                        checked={selectedApps.includes(app.id)}
                        onChange={handleCheckboxChange}
                    />
                    <div>id: {app.id}</div>
                    <div>appname: {app.appname}</div>
                    <div>keyword: {app.keyword}</div>
                    <div>country: {app.country}</div>
                    <div>storeId: {app.storeId}</div>
                    <div>store: {app.store}</div>
                    <div>createdAt: {app.createdAt}</div>
                    <div>updatedAt: {app.updatedAt}</div>
                </div>
            
            ))}
            <form onSubmit={submitForm} >
                <label htmlFor="id">ID:</label>
                <input type="text" name="id" />
                <br/>
                <label htmlFor="appname">App name:</label>
                <input type="text" name="appname" />
                <br/>
                <label htmlFor="keyword">KeyWord: </label>
                <input type="text" name="keyword" />
                <br/>
                <label htmlFor="country">Country: </label>
                <input type="text" name="country" />
                <br/>
                <label htmlFor="storeId">StoreId: </label>
                <input type="text" name="storeId" />
                <br/>
                <label htmlFor="store">Store: </label>
                <input type="text" name="store" />
                <br/>
                <button type = "submit">확인</button>
            </form>
            <form onSubmit={handleDeleteApps}>
                <button type = "submit">삭제</button>
            </form>           
        </>
    )
}

export default MyPage;
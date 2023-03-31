import React from "react";

const Template = ({children}) => {
    console.log('ingtmpe')
    return (
        <div>
            <div>로그인 화면</div>
            <div>{children}</div>
        </div>
    );
}; 
export default Template; 
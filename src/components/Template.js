import React from "react";

const Template = ({children}) => {
    console.log(children, 'in child')
    return (
        <div>
            <div>오늘의 할 일 (0)</div>
            <div>여기는 할 일 목록이 들어갑니다.</div>
            {children}
        </div>
    );
};

export default Template;
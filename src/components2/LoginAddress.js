import React from "react";

const LogAdd = () => {
    return (
    <div >
        <div className="titleWrap">
        이메일과 비밀번호를
        <br/>
        입력해주세요
        </div>
        <div className="inputTitle">이메일 주소</div>
        <input className="input"/>
        <div className="errorMessageWrap">
        영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
        </div>
    </div>
    )
};

export default LogAdd;
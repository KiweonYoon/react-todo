import React from "react";

const PassWd = () => {
    return (
    <div className="inputTitle">
        비밀번호
        <br/>
      <input className="input"/>
      <div className="errorMessageWrap">
        영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
      </div>
    </div>
    )
};

export default PassWd;
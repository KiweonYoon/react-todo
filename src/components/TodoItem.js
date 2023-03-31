import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import "./TodoItem.css"

// TodoItem 컴포넌트 정의
const TodoItem = ({ todo ,onCheckToggle, onInsertToggle, onChangeSelectedTodo }) => {
    // todo 객체에서 id, text, checked 값을 추출하여 상수로 선언
    const { id, text, checked } = todo;
    return (
        // TodoItem 스타일링을 위한 div 요소
        <div className="TodoItem">
            {/* 할 일 완료 여부에 따라 체크박스 아이콘 변경 */}
            <div className={`content ${checked ? "checked" : ""}`}>
                {checked ? (
                    <MdCheckBox 
                    onClick={() => {
                        onCheckToggle(id);
                }}
                /> 
                ):(
                    <MdCheckBoxOutlineBlank
                    onClick={() => {
                        onCheckToggle(id);
                }}
                />
                )}
                {/* 할 일 내용 출력 */}
                <div 
                    className="text" 
                    onClick={() => {
                        onChangeSelectedTodo(todo);
                        onInsertToggle();
                }}>{text}</div>
            </div>
        </div>
    );
};

export default TodoItem;
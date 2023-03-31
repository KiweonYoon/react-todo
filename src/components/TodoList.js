import React from "react";
import TodoItem from "./TodoItem";
import './TodoList.css';

const TodoList = ({todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo}) => {
    console.log(todos, 'in TodoList 1')
    return (
        <div className="TodoList">
        {
            todos.map(todo => {
                console.log(todo, 'in todo')
                    return (
                        <TodoItem 
                        todo={todo} 
                        key = {todo.id} 
                        onCheckToggle = {onCheckToggle} 
                        onInsertToggle={onInsertToggle} 
                        onChangeSelectedTodo={onChangeSelectedTodo}
                        />
                    )
                }
            )
        }
        </div>
    );
};

export default TodoList ;
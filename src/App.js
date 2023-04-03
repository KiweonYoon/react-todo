import React, {useState, useEffect } from "react";
import axios from "axios";
import { MdAddCircle } from "react-icons/md";

import './App.css';
import Template from "./components/Template";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";


let nextId = 4;
const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false); // insertToggle 상태값과 setInsertToggle 함수를 정의하고, 초기값을 false로 설정
  const [todos, setTodos] = useState([ // todos 상태값과 setTodos 함수를 정의하고, 초기값을 배열로 설정
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: false
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    }

  ]);
  
  const onInsertToggle = () => {
    if (selectedTodo){
      setSelectedTodo(null);
    } // onInsertToggle 함수를 정의
    setInsertToggle(prev => !prev); // insertToggle 상태값을 반전시킴
  }

  const onInsertTodo = (text) => {
    if (text === ""){
      return alert('할 일을 입력해주세요.'); 
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId++;                              // push vs concat  concat은 새로운 배열을생성,전 배열을 수정 x
    }
  };

  const onCheckToggle = id => {
    setTodos(todos => 
      todos.map(todo => 
        todo.id === id ? {...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };
  
  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, text} : todo))
  }
  
  
  return (
    <Template todoLength={todos.length}> 
      <TodoList 
        todos={todos} 
        onCheckToggle = {onCheckToggle} 
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
        onRemove = {onRemove} 
        />
      <div className="add-todo-button" onClick={onInsertToggle}>  
        <MdAddCircle /> 
      </div>
      {insertToggle && 
      <TodoInsert
        selectedTodo = {selectedTodo}
        onInsertToggle = {onInsertToggle}  
        onInsertTodo = {onInsertTodo}
        onRemove = {onRemove}
        onUpdate = {onUpdate} 
      />}
    </Template>
  )};




export default App;

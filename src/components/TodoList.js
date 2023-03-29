import React from "react";

const makeTodoList = () => (<>test</>)
console.log('hi')
const TodoList = ({todos}) => {
    console.log(todos, 'in TodoList 1')
    return (
    <div>
        {
            todos.map(todo => {
                console.log(todo, 'in todo')
                    return (
                        <div key={todo.id}>{todo.text}</div>
                    )
                }
            )
        }
        </div>
    );
};

export default TodoList ;
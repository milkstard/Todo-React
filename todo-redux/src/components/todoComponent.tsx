import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store/todoStore';
import { addTodo, toggleTodo, removeTodo } from '../store/todoSlice';

function TodoApp() {
    const [text, setText] = useState("");
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch<AppDispatch>();

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    return (
        <div>
            <h2>Todo List (Redux + Typescript)</h2>
            <input
                value = {text}
                onChange = {e => setText(e.target.value)}
                placeholder='What do you have in mind?'
            />
            <button onClick = {handleAddTodo}>Add Todo</button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                        onClick = {() => dispatch(toggleTodo(todo.id))}
                        style = {{textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer"}}
                        >
                            {todo.text}
                        </span> &nbsp;
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Remove Todo</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoApp;
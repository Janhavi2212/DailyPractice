import { useState, useReducer } from 'react';
import './App.css';
import React from 'react';

const initialState = {
  todos: [],
};

const ACTIONTYPES = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONTYPES.ADD_TODO:
      if (!action.payload || action.payload.trim() === "") {
        return state;
      }
      const newTodo = {
        id: Date.now(),
        text: action.payload.trim(),
        isCompleted: false,
      };
      return { ...state, todos: [...state.todos, newTodo] };

    case ACTIONTYPES.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === action.payload ? { ...el, isCompleted: !el.isCompleted } : el
        ),
      };

    case ACTIONTYPES.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONTYPES.ADD_TODO, payload: newTodoText });
    setNewTodoText('');
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type='text'
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder='Add Todo..'
        />
        <button type='submit'>Add Todo</button>
      </form>

      <ul>
        {state.todos.map((el) => (
          <li key={el.id}>
            <span
              onClick={() =>
                dispatch({ type: ACTIONTYPES.TOGGLE_TODO, payload: el.id })
              }
              style={{
                cursor: 'pointer', 
                marginRight: '10px', 
                textDecoration: el.isCompleted ? 'line-through' : 'none',
              }}
            >
              {el.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: ACTIONTYPES.REMOVE_TODO, payload: el.id })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {state.todos.length === 0 && <p>No todos yet!</p>} 
    </div>
  );
}

export default App;
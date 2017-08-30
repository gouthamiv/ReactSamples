import React from 'react';
import {AddTodo} from './AddTodo';
import {TodoList} from './TodoList';
let nextTodoId = 0;

const ADD_TODO='ADD_TODO',TOGGLE_TODO='TOGGLE_TODO';



export function TodoApp(props) {
	function onToDoClick(id) {
		props.dispatch({
			type:TOGGLE_TODO,
			id:id
		})
	}
	function onAddClick(text) {
		props.dispatch({
			type: ADD_TODO,
			id : nextTodoId++,
			text
		})
	}
	// props
		// state
			// todos : []
	return (
		<div>
			<AddTodo 
				onAddClick={onAddClick}
			 />
			<TodoList 
				todos={props.todos} 
				onToDoClick={onToDoClick}
			/>
			
		</div>
	);
}


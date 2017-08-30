import React from 'react';
import {Todo} from './Todo'



export function TodoList(props) {
	return (
		<ul>
			{props.todos.map(function(item){
				return <Todo {...item} key={item.id} onClick={()=>props.onToDoClick(item.id)}/>
			})}
		</ul>
	);
}
import React from 'react';
import ReactDOM from 'react-dom';
import {TodoApp} from './components/TodoApp';

import Redux, {combineReducers, createStore} from 'redux';
import {todos} from './reducers/todos';
//import {visibilityFilter} from './reducers/visibilityFilter';

const todoAppReducers = combineReducers({ todos });
console.log('1');
const store = createStore(todoAppReducers);

// if there any changes in state of the store
// .subscribe

store.subscribe(render);
function dispatch(action) {
	//debugger;
	console.log('-----------');
	console.log('previous state : ', store.getState());
	console.log('dispatching action : ', action);
	// 
	store.dispatch(action);
	console.log('next state : ', store.getState());
}
function render() {

	ReactDOM.render(
		
		
			<TodoApp 
				{...store.getState()}
				dispatch={dispatch}
			/>, document.getElementById('app')
		
		)
}

console.log('2');
render();
console.log('3');

console.log('initial state', store.getState())


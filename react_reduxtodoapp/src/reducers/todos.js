const ADD_TODO='ADD_TODO',TOGGLE_TODO='TOGGLE_TODO';
export function todos(state = [], action) {
	switch(action.type) {
		case ADD_TODO: 
			//return state.concat([{text: action.text, id:action.id,completed:false}])
			return [...state, {
					text : action.text,
					id: action.id,
					completed: false
				}
			];
		case TOGGLE_TODO:
			return state.map(function(todo){
				if(todo.id===action.id) {
					return Object.assign({}, todo, {completed: !todo.completed})
				}else{
					return todo;
				}
			})
		default : 
			return state
	}
}
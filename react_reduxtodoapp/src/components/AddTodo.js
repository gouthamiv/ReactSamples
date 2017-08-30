import React from 'react';

export class AddTodo extends React.Component {
	constructor() {
		this.update = this.handleClick.bind(this);
	}
	render() {
		return (
			<div>

				<input type="text" ref="input"/>
				<button onClick={this.update}>Add todo</button>
				
			</div>
		)
	}
	handleClick(event) { // window
		const text = this.refs.input.value; // this.refs // this--? currentElementObject 
		this.props.onAddClick(text);
	}
}

// React.createElement(button, {onClick:this.update}, 'Add todo') --
//> object --> html 
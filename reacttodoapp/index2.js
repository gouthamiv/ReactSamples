import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component{
	constructor(props){
		super(props);
		this.state={items: [],
					priority: []}
	}

	addItem(e){
		var itemArray = this.state.items;
		var priorityArray = this.state.priority;
	   	  itemArray.push(
		    {
		      taskText: this._inputElement1.value,
		      key: Date.now()
		    }
		  );
		 
	   	  priorityArray.push(
		    {
		      priorityText: this._inputElement2.value,
		     key: Date.now()
		    }
		  );
		 
		 
		  this.setState({
		    newInfo: {items: itemArray,
		   			  priority: priorityArray}
		  });
		 
		  this._inputElement1.value = "";
		  this._inputElement2.value = "";
		  e.preventDefault();
	}

	render(){
		
		return(
			<div> 
				<form onSubmit={this.addItem.bind(this)}>
					<input type="text" placeholder="Enter task" 
					 ref={(a) => this._inputElement1 = a} /> 
					 <br/>
					 <input type="number" placeholder="Enter priority" 
					 ref={(b) => this._inputElement2 = b} /> 
					 <br/>
					<button> Submit </button>
				</form>
				<TodoItems entries={this.state.newInfo}> </TodoItems>
				 
			</div>
			)
	}
}

class TodoItems extends React.Component{

  createTasks(item) {
      return (
      			<div>
      			<li >{item.items}  {item.priority}</li>      			
      			</div>
      		)		
   }   
        
    	
  render(){

    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
   
    return (
	    <div>
	      <ul>
	        {listItems} 
	      </ul>
	    </div>
    )
   }
  }
TodoItems.defaultProps = {
	entries : []
}
ReactDOM.render(<TodoList />, document.getElementById("Application") );
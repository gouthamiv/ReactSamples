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
		    items: itemArray,
		    priority: priorityArray
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
				<TodoItems entriesTask={this.state.items} 
				           entriesPriority={this.state.priority} > </TodoItems>
				 
			</div>
			)
	}
}

class TodoItems extends React.Component{

  createTasks(item) {
      return (
      			<div>
      			<li >{item.taskText} </li>      			
      			</div>
      		)		
   }   
    createPriority(item) {
      return (
      			<div>
      			<li >{item.priorityText} </li>      			
      			</div>
      		)		
   }       
    	
  render(){

    var todoEntriesTask = this.props.entriesTask;
    var todoEntriesPriority = this.props.entriesPriority;

    var listItems = todoEntriesTask.map(this.createTasks);
    var listPriority=todoEntriesPriority.map(this.createPriority);
    return (
	    <div>
	      <ul>
	        {listItems} {listPriority}
	      </ul>
	    </div>
    )
   }
  }

ReactDOM.render(<TodoList />, document.getElementById("Application") );
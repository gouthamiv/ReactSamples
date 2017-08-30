import React from 'react';
import ReactDom from 'react-dom';
class Jhansi extends React.Component{
	constructor(props){
		super(props);
		this.state= 
		{
			counter:0,
			task: [],
			priority: ""
		}
	}
	update(e){
		this.setState(
			{
				counter: this.state.counter+1,
				
		}
		)
	}

	// taskupdate(a){

	// 	this.setState(
	// 		{
				
	// 			task: this.refs.a.value,
	// 			priority: this.refs.b.value
	// 	}
	// 	)
	// }


	handleChange(event){
		this.setState({
			value1: this.refs.e1.value,
	        value2: this.refs.e2.value
	    })
	}
   
	handleSubmit(event){

		//Definig form here which value is the input value, later to be concatted to tmk[]
    var form = this._input.value;
    var taskArray= [];
    //var tmk = this.state.value;
    var allTasks = taskArray.push(form);
    //Clears input on 'submit'
    this.setState({value1:'', value2:''});
    this.setState({task: allTasks});
    event.preventDefault();
	}

	render(){
		var customStyle= {
			//color: "orange",
			color: "orange",
			backgroundColor: "black"
		}

		var customBtnStyle= {
			//color: "orange",
			color: "black",
			backgroundColor: "orange"
		}

		var tableStyle={
			border: "1px"
		}
		return(
				<div >
					<div style={customStyle}>
						<button style={customBtnStyle} onClick={this.update.bind(this)}>Go</button>
						<br/>
						{this.state.counter}
					</div>
					<br/>
						<input type="text" onChange={this.handleChange.bind(this)} value1={this.state.value1} ref={(el) => this._input = el}/> 
						<input type="number" onChange={this.handleChange.bind(this)} value2={this.state.value2} ref={(e2) => this._input = e2} />
						<button onClick={this.handleSubmit.bind(this)}> Add </button>
						<br/>
						<table>
						<th> Task Name </th> <th> Priority </th>
						<tr>
								<td>   {this.state.task}    </td> 
								<td> {this.state.priority}  </td>
						</tr>
						</table>
				</div>
			);
	}
}

ReactDom.render(<Jhansi/> , document.getElementById("Application"));


// var React = require('react');
// var ReactDOM = require('react-dom');

// class TMKform extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { tmks: []};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     //Definig form here which value is the input value, later to be concatted to tmk[]
//     var form = this._input.value;
//     var tmk = this.state.value;
//     var allTmks = this.state.tmks.concat([form]);
//     //Clears input on 'submit'
//     this.setState({value: ''});
//     this.setState({tmks: allTmks});
//     event.preventDefault();
//   }

//   render() {
//   console.log(this.state.tmks);

//     return (
//       <div className = "tmkSearch">
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Enter TMK Here: <br />
//             <input type="text" name="TMK Number" value={this.state.value} 
//             onChange={this.handleChange} ref={(el) => this._input = el}/>
//           </label> <br />
//           <button onClick={this.handleSubmit}>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }


// ReactDOM.render(<TMKform />, document.getElementById('app'));

// module.exports = TMKform;

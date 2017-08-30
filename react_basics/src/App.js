import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Creating a component using class component
// class App extends React.Component{
//   render(){
//     return React.createElement('h1', null, 'Hello Jhansi')
//   }
  
// }


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>React Todos</h2>
//         </div>
//         <div className="Todo-App">
//           <form>
//             <input type="text"/>
//           </form>
//           <div className="Todo-List">
//             <ul>
//               <li><input type="checkbox"/> Learn JSX</li>
//               <li><input type="checkbox"/> Build an Awesome App</li>
//               <li><input type="checkbox"/> Ship It!</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

//export default App;



//creating  a component using stateless function component
//const App= () => <h1> Hello Sravya </h1>
 

//returning multiple nodes
//  class App extends React.Component{
//   render(){
//     return  (<div> 
//             <h1> Hello </h1> <b> Jhansi </b>
//             </div>)
//   }
  
// }



//How to create props
// class App extends React.Component{
//   render(){

//     let text=this.props.text
//     return   <h1> {this.props.text} </h1> 
          
//   }
  
// }




//Defining the types of each prop we are going to use
App.propTypes={
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}



//Creating  a default prop if no prop is given in the index.js file
App.defaultProps= {
  text: "This is the default text"
}




//Managing react components using setState()

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       text: "this is the state text",
//       cat: 0
//     }
//   }

// update(e){
//   this.setState({text: e.target.value})
// }

//  render(){
//   return (
//     <div>
//     <input type="text" onChange={this.update.bind(this)}/>
//     <h1> {this.state.text} - {this.state.cat}</h1>
//     </div>
//     )
//  }
  
// } 




//Using react components as a child for another react component
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       text: "this is the state text",
//       cat: 0
//     }
//   }

// update(e){
//   this.setState({text: e.target.value})
// }

//  render(){
//   return (
//     <div>
//          <h1> {this.state.text} </h1>
//          <Widget update={this.update.bind(this)} />
//          <Widget update={this.update.bind(this)} />
//          <Widget update={this.update.bind(this)} />
//          <Widget update={this.update.bind(this)} />
//     </div>
//     )
//  }
  
// } 

// const Widget=(props)=>  <input type="text" onChange={props.update}/>



// nested components
// class App extends React.Component{
//   render(){
//     return <button> I <Heart/> React </button>
//   }
// }
// const button= (props)=> <button> {props.children} </button>

// class Heart extends React.Component{
//   render(){
//     return <span> &hearts; </span>
//   }
// }




// class App extends React.Component{
//   render(){
//     return <Title text="gdch"/>
//   }
// }

// const Title= (props) => <h1> Title: {props.text}</h1>


// Title.propTypes={
//   //text: React.PropTypes.string.isRequired
//   text(props, propName, component){
//     if(!propName in props){
//       return new Error("missing $(propName")
//     }

//     if (props[propName].length <6){
//       return new Error('$(propName) was too short')
//     }
//   }
// }





//Respond to mouse events and key events
// class App extends React.Component
// {

//   constructor(){
//     super();
//     this.state = {currentEvent: '-----'}
//     this.update = this.update.bind(this)
//   }


//   update(e){
//     this.setState({currentEvent: e.type})
//   }

//   render(){
//     return(
//         <div>
//         <textarea onKeyPress={this.update} 
//                   onCopy={this.update}
//                   onCut={this.update}
//                   onPaste={this.update}
//                   onTouchStart={this.update}
//                   onTouchMove={this.update}
//                   onTouchEnd={this.update}
//                   onFocus={this.update}
//                   onBlur={this.update}
//                   cols="30" 
//                   rows="10" /> 
//         <h1> {this.state.currentEvent} </h1>
//         </div>
//       )
//   }
// }




//Use React ref to get a reference to specific components

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state= {a:""}
//   }

//   update(e){
//     this.setState({
//                    a: this.a.refs.inputs.value,
//                    b: this.refs.b.value
//                   })
//   }
//   render(){
//     return (
//       <div> 
//       <Input 
//       ref={component=> this.a=component}
//       update={this.update.bind(this)}
//       /> {this.state.a}
//       <hr/>
//       <input 
//       ref="b"
//       type="text"
//       onChange={this.update.bind(this)}
//       /> {this.state.b}
//       </div>

//       )
//   }
// }

// class Input extends React.Component{
//   render(){
//     return <div> <input ref="inputs" type="text" onChange={this.props.update}/> </div>
//   }
// }






//Lifecycle methods
// class App extends React.Component{
  
//   constructor(){
//     super();
//     this.state={val: 0}
//     this.update = this.update.bind(this)
//   }

//   update(){
//     this.setState({val: this.state.val + 1})
//   }


//   componentWillMount(){
//   console.log("componentWillMount")
//   }


//   render(){
//     console.log("render");
//     return (<button onClick={this.update}>{this.state.val}</button>)
//   }

//   componentDidMount(){
//     console.log("componentDidMount")
//   }

//   componentWillUnmount(){
//     console.log("componentWill Unmount")
//   }
// }


// class Wrapper extends React.Component{
//   mount(){
//     ReactDOM.render(<App /> , document.getElementById("a"))
//   }

//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById("a"))
//   }

//   render(){
//     return(
//       <div> 
//           <button onClick={this.mount.bind(this)}>Mount</button>
//           <button onClick={this.unmount.bind(this)}>UnMount</button>
//       </div>
//     )
//   }
// }





// Managing Lifecycle methods
// class App extends React.Component{
  
//   constructor(){
//     super();
//     this.state={val: 0}
//     this.update = this.update.bind(this)
//   }

//   update(){
//     this.setState({val: this.state.val + 1})
//   }


//   componentWillMount(){
//   console.log("componentWillMount")
//   this.setState({m: 2})
//   }


//   render(){
//     console.log("render");
//     return <button onClick={this.update}>
//                {this.state.val*this.state.m}
//            </button>
//   }

//   componentDidMount(){
//     console.log("componentDidMount")
//     this.inc=setInterval(this.update, 500)  
//   }

//   componentWillUnmount(){
//     console.log("componentWill Unmount")
//      clearInterval(this.inc)
//    }
// }


// class Wrapper extends React.Component{
//   mount(){
//     ReactDOM.render(<App /> , document.getElementById("a"))
//   }

//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById("a"))
//   }

//   render(){
//     return(
//       <div> 
//           <button onClick={this.mount.bind(this)}>Mount</button>
//           <button onClick={this.unmount.bind(this)}>UnMount</button>
//       </div>
//     )
//   }
// }






//Control react component when new props are revieved
// class App extends React.Component{

//   constructor(){
//     super();
//     this.state={increasing: false}
//   }

//   update(){
//     ReactDOM.render(
//     <App val={this.props.val +1}/>,
//     document.getElementById('root'))
//   }
  
//   componentWillReceiveProps(nextProps){
//     this.setState({increasing: nextProps.val > this.props.val})
//   }
  
//   shouldComponentUpdate(nextProps,nextState){
//    return nextProps.val % 5 === 0
//   }

//  componentDidUpdate(prevProps, prevState){
//   console.log(`prevProps: ${prevProps.val}`)
//  }

//   render(){
//     console.log(this.state.increasing)
//     return (
//       <button onClick={this.update.bind(this)}>
//       {this.props.val}
//       </button>
//       )
//   }

// }

// App.defaultProps={val: 0}









//Use maps to create react components from arrays of data
// class App extends React.Component{

//     constructor(){
//       super();
//       this.state={items: []}
//     }

//     componentWillMount(){
//       fetch('http://swapi.co/api/people/?format=json')
//       .then(response => response.json())
//       .then( ({results: items}) => this.setState({items}))
//     }

//     filter(e){
//       this.setState({filter: e.target.value})
//     }

//     render(){
//     let items =this.state.items
//     if(this.state.filter){
//       items = items.filter(item => 
//         item.name.toLowerCase()
//         .includes(this.state.filter.toLowerCase()))
//     }

//     return(
//       <div>
//       <input type="text" onChange={this.filter.bind(this)} />      
//        {items.map(item => 
//         <h4 key={item.name}>{item.name} </h4>)}
//         <Person key={items.name} person={items} />
//       </div>
//       )
//   }
// }

// const Person=(props) => <h4> {props.person.name} </h4>




// composing react component beahaviour using higher order components
// const HOC =(InnerComponent) => class extends React.Component{

// constructor(){
//   super();
//   this.state ={count: 0}
// }


// update(){
// this.setState({count: this.state.count+1})
// }

// componentWillMount(){
//   console.log("Will Mount")
// }

// render(){
//   return(
//       <div>
//         <InnerComponent
//            {...this.props}
//            {...this.state}
//            update={this.update.bind(this)}
//         />
//       </div>
//     )
// }
// }

// class App extends React.Component{
//   render(){
//     return (
//       <div> 
//           <Button> button </Button>
//           <LabelHOC> label</LabelHOC>
            
//       </div>
//       )
//   }
// }

// const Button= HOC((props) => 
// <button onClick={props.update}> {props.children} -{props.count} </button>)

// class Label extends React.Component{
//   render(){
//     return (
//         <label onMouseMove={this.props.update}> {this.props.children} -{ this.props.count}</label>
//       )
//   }
// }

// const LabelHOC = HOC(Label)





//Building JSX live compiler as a react component
// class App extends React.Component{

//   constructor()
//   {
//     super();
//     this.state ={
//       input: '/*add your jsx here */',
//       output: '',
//       err: ''
//     }
//   }

//   update(e){
//     let code=e.target.value;
//       try{
//         this.setState({
//           output: window.Babel
//           .transform(code, {presets: ['es2015' ,'react']})
//           .code, 
//           err:''

//         })
  
//     }

//     catch(err){
//         this.setState({err: err.message})
//     }
//   }

//   render(){
//     return(
//       <div>
//           <header>{this.state.err} </header>
//            <div className="container">
//               <textarea 
//               onChange={this.update.bind(this)}
//               defaultValue={this.state.input} />

//               <pre> {this.state.output}</pre>
//            </div>
//       </div>
//       )
//   }
// }






//Reaact.Children utilities
// class App extends React.Component{
//   render(){
//     return(
//         <Parent> 
//             <div className="childA"> </div>
//              <div className="childB"> </div>
         

//         </Parent>
//       )
//   }
// }

// class Parent extends React.Component{
//   render(){


//  let items= React.Children.
//                  forEach(this.props.children, child => console.log(child.props.className))
//   //let items = React.Children.toArray(this.props.children)
//   //let items= React.Children.only(this.props.children)
//     console.log(items)
//     return null
//   }
// }


// class App extends React.Component{
//   render(){
//     return(

//         <Buttons>

//             <button value="A"> A </button>
//             <button value="B"> B </button>
//             <button value="C"> C </button>
//         </Buttons>
//       )
//   }
// }


// class Buttons extends React.Component{
//   constructor(){
//     super();
//     this.state = {selected: 'None'}
//   }

//   selectItem(selected){
//     this.setState({selected})
//   }

//   render(){
//     let fn= child => React.cloneElement(child, {
//       onClick: this.selectItem.bind(this,child.props.value)
//     })

//     let items=React.Children.map(this.props.children, fn);
//     return(
//         <div> 
//             <h2> You have selected: {this.state.selected} </h2>
//             {items}

//         </div>
//       )
//   }
// }





// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       red:0
//     }
//     this.update=this.update.bind(this)
//   }
//   update(e){
//     this.setState({
//       red:ReactDOM.findDOMNode(this.refs.red.refs.inp).value
//     })
//   }
//   render(){
//     return (
//       <div>
//       <NumInput 
//         ref="red" 
//         min={0}
//         max={255}
//         step={0.01}
//         val={+this.state.red}
//         type="number"
//         label="Red"
//         update={this.update}/>
//       </div>
//       );
//   }
// }
// class NumInput extends React.Component{
//   render(){
//     let label=this.props.label !=='' ?
//     <label>{this.props.label} - {this.props.val}</label>:''
//     return (
//       <div>
//       <input ref="inp" 
//         type={this.props.type}
//         min={this.props.min}
//         max={this.props.max}
//         step={this.props.step}
//         defaultValue={this.props.val}
//         onChange={this.props.update}/>
//         {label}
//       </div>
//     );
//   }
// }
// NumInput.propTypes={
//   min:React.PropTypes.number,
//   max:React.PropTypes.number,
//   step:React.PropTypes.number,
//   val:React.PropTypes.number,
//   label:React.PropTypes.string,
//   update:React.PropTypes.func.isRequired,
//   type:React.PropTypes.oneOf(['number','range'])
// }
// NumInput.defaultProps={
//   min:0,
//   max:0,
//   step:1,
//   val:0,
//   label:'',
//   type:'range'
// }
export default App;

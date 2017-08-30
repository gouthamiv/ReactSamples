import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class ToDoApp extends Component {
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

// export default ToDoApp;


class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build an Awesome App', isComplete: false},
        {id: 3, name: 'Ship It', isComplete: false}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text"/>
          </form>
          <div className="Todo-List">
            <ul>
              {this.state.todos.map(todo =>
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isComplete}/> {todo.name}
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
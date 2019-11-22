import React, { Component } from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";
import Header from "./components/Header";

class App extends Component {
	constructor(props){
		super(props);
		this.state={ 
      todos: [
        {id: 0, text: "Wlcome To your Todo List!"},
        {id: 1, text: "Write Here your Daily, Weekly , monthly or Yearly Plants !"},
       {id:2, text : "And don't forget to remove what you are done !" }
      ],
      nextId: 3
      }
      this.addTodo= this.addTodo.bind(this);
      this.removeTodo= this.removeTodo.bind(this);
  }
  
  addTodo(todoText){
   let todos= this.state.todos.slice();
    todos.push({id:this.state.nextId, text:todoText}) ;
    this.setState({
      todos : todos,
      nextId: ++this.state.nextId
    });

  }

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter(( todo, index)=> todo.id !==id )
      
    })
   
  }

  
  render() {
    return (
      <div className="App">
        <div className="todoWrapper">
        <Header  />   
      <TodoInput todoText=""  addTodo={this.addTodo} />
        <ul>
         {
         this.state.todos.map((todo)=>{
              return <TodoItems  todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
                  })
         }         
        </ul>
      </div>
      </div>
    );
  }
}

export default App;

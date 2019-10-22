import React, { Component } from 'react';
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import Footer from "./Footer"

import "./style/todo-mvc.css"
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            todos:[
                {content:"AAA",complete:false},
                {content:"BBB",complete:true},
                {content:"CCC",complete:false}
            ],
            visibility:"completed"
        }
    }
    //添加todo
    addTodo(todo){
        this.state.todos.push(todo)
        this.setState({
            todos:this.state.todos
        })
    }
    //删除todo
    deleteTodo(todo){
        let index = this.state.todos.findIndex(t=>t==todo)
        this.state.todos.splice(index,1)
        this.setState({
            todos:this.state.todos
        })
    }
    //切换todo状态
    toggleTodo(todo){
        let index = this.state.todos.findIndex(t=>t==todo)
        this.state.todos[index].complete = !this.state.todos[index].complete;
        this.setState({
            todos:this.state.todos
        })
    }
    //批量切换todo的状态
    toggleAll(done){
        this.state.todos.forEach(todo=>todo.complete=done)
        this.setState({
            todos:this.state.todos
        })
    }
    //判断所有todo的complete
    allChecked(){
        return this.state.todos.every(todo=>todo.complete)
    }
    //未完成的有多少个
    leftTodo(){
        return this.state.todos.filter(todo=>todo.complete==false).length
    }
    //根据visibility筛选出某些todo
    filterTodos(){
        switch (this.state.visibility){
            case "all":
                return this.state.todos;
            case "completed":
                return this.state.todos.filter(todo=>todo.complete);
            case "active":
                return this.state.todos.filter(todo=>!todo.complete);
            default:
                break;
        }
    }
    //改变visibility的值
    setVisibility(flag){
        this.setState({
            visibility:flag
        })
    }
    render() {
        return (
            <div>
                <AddTodo addTodo={this.addTodo.bind(this)}></AddTodo>
                <TodoList allChecked={this.allChecked()} toggleAll={this.toggleAll.bind(this)} toggleTodo={this.toggleTodo.bind(this)} todos={this.filterTodos()} deleteTodo={this.deleteTodo.bind(this)}></TodoList>
                <Footer visibility={this.state.visibility} setVisibility={this.setVisibility.bind(this)} leftTodo={this.leftTodo()}></Footer>
            </div>
        );
    }
}

export default App;
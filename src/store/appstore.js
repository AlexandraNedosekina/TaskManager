import {observable,computed,action,reaction} from 'mobx';
import {v4} from 'uuid';
class AppStore{
   constructor(){
        //list of tasks, persistence with localStorage
        this.todolist = observable(JSON.parse(localStorage.getItem('todolist'))||[]);
        // params is a map for settings in general
        this.params = observable.map();
        this.params.set('filter','all');
        // binding this to reactions
        this.todolistChanged = this.todolistChanged.bind(this);
        this.itemStatusChange = this.itemStatusChange.bind(this);
        // Defining conditions for reactions
        // when the text change
        this.todolistChanged = reaction(()=>this.todolist.map((todo)=>todo.text),this.todolistChanged)
        // When status change
        this.itemStatusChange = reaction(()=>this.todolist.filter((todo)=>todo.done),this.itemStatusChange)
   }
   @action todolistChanged(){
     localStorage.setItem('todolist',JSON.stringify(this.todolist.toJS()));
   }
   @action itemStatusChange(){
     localStorage.setItem('todolist',JSON.stringify(this.todolist.toJS()));
   }
   // To filter the list of tasks
   @action setFilter(value){
     this.params.set('filter',value);
   }
   // Add a task to list
  @action addTodo(text){
    let todo = {id:v4(),text:text,done:false}
    this.todolist.push(todo);
  }
  // Remove a task from list
  @action removeTodo(key){
    this.todolist.replace(this.todolist.filter((todo)=>todo.id!=key))
  }
  // Toggle status to be able to done/undone
  @action toggleDone(key){
    this.todolist.map((todo)=>{
      if(todo.id == key)
      todo.done = !todo.done;
    })
  }
  // Update text of a spefcific item
  @action editTodo(key,value){
    this.todolist.map((todo)=>{
      if(todo.id==key)
      todo.text = value;
      return todo;
    })
  }
  // Clear the task list
  @action clearList(){
    this.todolist.clear();
  }
  // a computed value that returns the number of pending tasks
  @computed get pending_tasks(){
    return this.todolist.filter((item)=>!item.done).length;
  }
  // a computed value that return the number of done tasks 
  @computed get done_tasks(){
    return this.todolist.filter((item)=>item.done).length;
  }
}

export default new AppStore;

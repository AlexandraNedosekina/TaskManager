import React, { Component} from 'react';
import { Icon,Label } from 'semantic-ui-react'
import {inject,observer} from 'mobx-react';
// The todo item in the list
export default @inject('store')  @observer class Todo extends Component {
  constructor(props) {
    super(props);
    this.state={alertdelete:false,text:this.props.text};
    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.onDoneClick = this.onDoneClick.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onRemoveCancelClick = this.onRemoveCancelClick.bind(this);
    this.onRemoveConfirmClick = this.onRemoveConfirmClick.bind(this);
  }
  onRemoveClick(){
    this.setState({alertdelete:true});
  }
  onRemoveConfirmClick(){
    this.setState({alertdelete:false});
    this.props.store.removeTodo(this.props.id);
  }
  onRemoveCancelClick(){
    this.setState({alertdelete:false});
  }
  onDoneClick(){
    this.props.store.toggleDone(this.props.id);
  }
  onTextChange(e){
    this.props.store.editTodo(this.props.id,e.target.value);
    this.setState({text:e.target.value})
  }

  render() {
    return (<li className="task" onMouseLeave={this.onRemoveCancelClick} >
              {this.props.done?<Icon bordered inverted color='green' size="tiny" onClick={this.onDoneClick}  name='check' />:<Icon color="grey" bordered inverted size="tiny" onClick={this.onDoneClick} name='minus' />}
              &nbsp;&nbsp;<input value={this.state.text} onChange={this.onTextChange} className="todo-input" />
              <span style={{float:"right"}} >
              <span className="action-icon" style={{display:this.state.alertdelete?"block":"none"}}>Are you sure?&nbsp;&nbsp; <Label color="red" onClick={this.onRemoveConfirmClick}>Yes</Label> <Label onClick={this.onRemoveCancelClick} color="teal">No</Label></span>
                <Icon className="action-icon" style={{display:!this.state.alertdelete?"block":"none"}} bordered inverted color='red' onClick={this.onRemoveClick} name='trash' />
              </span>
            </li>);
  }
}

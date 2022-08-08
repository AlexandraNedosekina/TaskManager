import React, { Component} from 'react';
import { Input, Label, Menu } from 'semantic-ui-react'
import {inject,observer} from 'mobx-react';
export default @inject('store') @observer class  SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  onFilterSelected(value){
    this.props.store.setFilter(value)
  }
  render() {
    return (
      <Menu vertical fluid>
        <Menu.Item  active={this.props.store.params.get('filter')=="all"} onClick={()=>{this.onFilterSelected('all')}}  >
          <Label >{this.props.store.pending_tasks+this.props.store.done_tasks}</Label>
          All
        </Menu.Item>

        <Menu.Item active={this.props.store.params.get('filter')=="pending"} onClick={()=>{this.onFilterSelected('pending')}} >
          <Label color='red'>{this.props.store.pending_tasks}</Label>
          Todo
        </Menu.Item>

        <Menu.Item active={this.props.store.params.get('filter')=="done"} onClick={()=>{this.onFilterSelected('done')}}>
          <Label color="teal">{this.props.store.done_tasks}</Label>
          Done
        </Menu.Item>

      </Menu>
    );
  }
}

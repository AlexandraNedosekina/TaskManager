import React, { Component} from 'react';
import {Grid} from 'semantic-ui-react';
import SideMenu from '../sidemenu/sidemenu';
import TodoList from '../todolist/todolist';

export default class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Grid stackable columns={2} divided>
      <Grid.Row>
        <Grid.Column width={4}>
          <SideMenu />
        </Grid.Column>
        <Grid.Column width={12}>
          <TodoList />
        </Grid.Column>
      </Grid.Row>
    </Grid>);
  }
}

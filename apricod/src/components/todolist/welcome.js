import React, { Component} from 'react';
import { Message } from 'semantic-ui-react'
export default class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( <Message
    icon='checked calendar'
    header="Let's start planning!"
    content="Add tasks to take the control of your day. "
  />);
  }
}

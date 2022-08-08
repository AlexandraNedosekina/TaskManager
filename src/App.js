import ReactDOM from 'react-dom'
import React from 'react';
import {Provider} from 'mobx-react';
import AppStore from './store/appstore';
import Bar from './components/bar/bar';
import Content from './components/content/content';
import 'semantic-ui-css/semantic.min.css';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Provider store={AppStore}>
              <div>
                <Bar />
                <Content />
              </div>
          </Provider>
    );
  }
}

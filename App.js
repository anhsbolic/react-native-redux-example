import React, { Component } from 'react';
import Navigator from './src/navigators/Navigator';

import { Provider } from 'react-redux';
import configStore from './src/store/configStore';
const store = configStore();

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}

export default App;
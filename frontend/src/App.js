import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import SearchBar from './components/SearchBar';
import CurrentItemContainer from './containers/CurrentItemContainer';

class App extends Component {
  render() {
    return (
        <div>
            <Header textAlign='center' as='h1'>Search App</Header>
            <SearchBar />
            <CurrentItemContainer />
        </div>
    );
  }
}

export default App;

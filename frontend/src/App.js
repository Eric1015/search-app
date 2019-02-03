import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import SearchBarContainer from './containers/SearchBarContainer';
import CurrentItemContainer from './containers/CurrentItemContainer';
import { loadItems } from './redux/actions/actions';

class App extends Component {
    componentDidMount() {
        this.props.loadItems();
    }

    render() {
        return (
            <div>
                <Header textAlign='center' as='h1'>Search App</Header>
                <SearchBarContainer />
                <br></br>
                <CurrentItemContainer />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    items: state.items
})

export default connect(mapStateToProps, {
    loadItems
})(App);

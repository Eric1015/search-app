import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import SearchBarContainer from './containers/SearchBarContainer';
import CurrentMainContainer from './containers/CurrentMainContainer';
import { loadItems } from './redux/actions/actions';
import Loading from './components/Loading';

class App extends Component {
    componentDidMount() {
        this.props.loadItems();
    }

    render() {
        if (this.props.loading) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    <Header textAlign='center' as='h1'>Search App</Header>
                    <SearchBarContainer />
                    <br></br>
                    <CurrentMainContainer />
                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    items: state.items,
    loading: state.loading
})

export default connect(mapStateToProps, {
    loadItems
})(App);

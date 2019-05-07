import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Button } from 'semantic-ui-react';
import SearchBar from 'react-search-bar-semantic-ui';

import CurrentMainContainer from './containers/CurrentMainContainer';
import { loadItems, handleSearchBarResultSelect, changeCustom } from './redux/actions/actions';
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
                    <div className="search-bar">
                        {this.props.custom?
                            <SearchBar data={this.props.item} onResultSelect={this.props.onResultSelect} customComponent={customComponent} />
                            :
                            <SearchBar data={this.props.items} onResultSelect={this.props.onResultSelect} />
                        }
                    </div>
                    <br></br>
                    <div style={{textAlign: 'center'}}>
                        <Button color="green" inverted onClick={this.props.changeCustom}>Change Search Result</Button>
                    </div>
                    <br></br>
                    <CurrentMainContainer />
                </div>
            );
        }
    }
}

const customComponent = (props) => {
    const {title} = props;
    return (
        <div>
            {title && <div className='title custom-result'>{title}</div>}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    items: state.items,
    loading: state.loading,
    custom: state.custom
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadItems: () => dispatch(loadItems()),
    onResultSelect: (event, {result}) => dispatch(handleSearchBarResultSelect(event, result)),
    changeCustom: () => dispatch(changeCustom())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

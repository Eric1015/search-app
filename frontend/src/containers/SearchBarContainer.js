import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { handleSearchBarChange } from '../redux/actions/actions';

const mapStateToProps = (state, ownProps) => ({
    searchBarLoading: state.searchBar.loading,
    results: state.searchBar.results,
    value: state.searchBar.value
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSearchChange: (event) => dispatch(handleSearchBarChange(event.target.value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)
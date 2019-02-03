import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { handleSearchBarChange, handleSearchBarResultSelect } from '../redux/actions/actions';

const mapStateToProps = (state, ownProps) => ({
    searchBarLoading: state.searchBar.loading,
    results: state.searchBar.results,
    value: state.searchBar.value
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSearchChange: (event) => dispatch(handleSearchBarChange(event.target.value)),
    onResultSelect: (event, {result}) => dispatch(handleSearchBarResultSelect(event, result)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)
import React from 'react';
import { Search, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
        let {searchBarLoading, results, value } = props;
        return (
            <div>
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column width={4}>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Search
                                loading={searchBarLoading}
                                onSearchChange={props.onSearchChange}
                                onResultSelect={props.onResultSelect}
                                results={results}
                                value={value}
                            />
                        </Grid.Column>
                        <Grid.Column width={4}>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
}

SearchBar.propTypes = {
    searchBarLoading: PropTypes.bool.isRequired,
    results: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired
}

export default SearchBar;

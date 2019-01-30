import React, { Component } from 'react';
import { Search, Grid } from 'semantic-ui-react';

class SearchBar extends Component {
  render() {
    return (
        <div>
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column width={4}>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Search
                            value=""
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
  }
}

export default SearchBar;

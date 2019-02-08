import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header } from 'semantic-ui-react';

const Item = ({ item }) => {
    return (
        <Grid>
            <Grid.Row columns={4}>
                <Grid.Column width={4}>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Header as='h1'>{item.title}</Header>
                    <a href={item.link}>Link</a>
                    <p>{item.description}</p>
                </Grid.Column>
                <Grid.Column width={4}>
                    <div className="image-container">
                        <img src={item.image} alt=''></img>
                    </div>
                </Grid.Column>
                <Grid.Column width={4}>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

Item.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string.isRequired
    })
}

export default Item;
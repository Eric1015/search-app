import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const CustomButton = ({onClick, value}) => (
    <Button inverted color='green' onClick={onClick}>{value}</Button>
)

CustomButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default CustomButton;
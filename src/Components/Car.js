import React, {Component} from 'react';
import CarItem from './CarItem';
import PropTypes from 'prop-types';

class Car extends Component {
    render() {
        return this.props.imageArray.map((cars) => (
        <CarItem key={cars.id} cars={cars}/>
        ));
    }
}

Car.propTypes = {
    imageArray: PropTypes.array.isRequired
};

export default Car;
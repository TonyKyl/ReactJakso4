import React from 'react';
import CarListItem from './CarListItem';
import PropTypes from 'prop-types';

const CarList = (props) => {
    const imagerows = props.imageArray.map((item, i) => {
        return <CarListItem key={i} pics={item}/>;
    });
    return (
        <table>
            <tbody>
            {imagerows}
            </tbody>
        </table>
    );
};

//Prop types
CarList.propTypes = {
    imageArray: PropTypes.array.isRequired
};

export default CarList;

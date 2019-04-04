import React from 'react';
import CarList from '../Components/CarList';
import PropTypes from 'prop-types';

const Home = (props) => {
    const {imageArray} = props;
    return (
        <React.Fragment>
            <h1>Home</h1>
            <CarList imageArray={imageArray}/>
        </React.Fragment>
    );
};

Home.propTypes = {
    imageArray: PropTypes.array,
};

export default Home;
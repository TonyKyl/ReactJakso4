import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Img = (props) => {
    console.log('props', props);
    const {thumbnails, screenshot, title} = props.pics;
    if (thumbnails !== null) {
        return <img src={mediaUrl + thumbnails.w160} alt={title}/>;
    } else {
        return <img src={mediaUrl + screenshot} alt={title}/>;
    }
};

const CarListItem = (props) => {
    const {title, description, file_id} = props.pics;
    return (
        <tr>
            <td>
                <Img pics={props.pics}/>
            </td>
            <td>
                <h3>{title}</h3>
                <p>{description}</p>
            </td>
            <td>
                <Link to={'single/' + file_id}>View</Link>
            </td>
        </tr>
    );
};

CarListItem.propTypes = {
    pics: PropTypes.object,
};
export default CarListItem;
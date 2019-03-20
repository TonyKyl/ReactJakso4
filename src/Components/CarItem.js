import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export class CarItem extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td className={'imagecell'}>
                            <img src={this.props.cars.thumbnail}
                                 alt={this.props.cars.alt}>
                            </img>
                        </td>
                        <td className={'titlecell'}>
                            <h3>{this.props.cars.title}</h3>
                            <p>{this.props.cars.description}</p>
                        </td>
                        <td className={'linkcell'}>
                            <a href={this.props.cars.link}>View</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

CarItem.propTypes = {
    cars: PropTypes.object.isRequired
};

export default CarItem
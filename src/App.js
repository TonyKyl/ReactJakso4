import React, { Component } from 'react';
import Car from './Components/Car';
import './App.css';
import axios from 'axios';

class App extends Component {
    state = {
        imageArray: []
    };

    componentDidMount() {
        axios.get('test.json')
            .then(res => this.setState({imageArray: res.data}))
            .catch(err => {
                console.log('Error happened during fetching', err);
            })
    }

    render() {
        return (
            <div className="App">
                <Car imageArray={this.state.imageArray} />
            </div>
        );
    }
}

export default App;
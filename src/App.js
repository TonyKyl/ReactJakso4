import React, { Component } from 'react';
import Car from './Components/Car';
import './App.css';

class App extends Component {
    state = {
        imageArray: [
            {
                id: 1,
                title: 'Best Car ',
                description: 'Best car with V8 Twin-turbo Hybrid Formula Engine. Very fast.',
                thumbnail: 'https://apprecs.org/ios/images/app-icons/256/70/1212280176.jpg',
                alt: 'Image of Supercar',
                link: 'https://apprecs.org/ios/images/app-icons/256/70/1212280176.jpg'
            },
            {
                id: 2,
                title: 'Second Best Car',
                description: 'Second best car with V10 Turbocharged Compressor Boat Engine. Pretty fast.',
                thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr07YfBovlAmoUSBld034QU795WZDtK53LqGP-MDwYv3f73tjD',
                alt: 'Image of OK Car',
                link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr07YfBovlAmoUSBld034QU795WZDtK53LqGP-MDwYv3f73tjD'
            },
            {
                id: 3,
                title: 'Worst Car',
                description: 'Worst car with 1.6 Liter Ecoboost engine. Not cool.',
                thumbnail: 'https://static.myfigurecollection.net/pics/figure/big/683544.jpg',
                alt: 'Image of Bad Car',
                link: 'https://static.myfigurecollection.net/pics/figure/big/683544.jpg'
            }
        ]
    };

    render() {
        return (
            <div className="App">
                <Car imageArray={this.state.imageArray} />
            </div>
        );
    }
}

export default App;
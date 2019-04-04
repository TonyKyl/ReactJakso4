import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {getAllMedia} from './utils/MediaAPI';
import Nav from './Components/Nav';
import Home from './views/Home';
import Profile from './views/Profile';
import Single from './views/Single';
import Logout from './views/Logout';
import Login from './views/Login';

class App extends Component {
    state = {
        imageArray: [],
        user: null,
    };

    setUser = (user) => {
        this.setState({user});
    };

    checkLogin = () => {
        return this.state.user !== null;
    };



    componentDidMount() {
        getAllMedia().then(images => {
            this.setState({imageArray: images});
        });
    }

    render() {
        return (
            <Router basename='/~tonyh/routing'>
                <div className='container'>
                    <div className="App">
                        <Nav checkLogin={this.checkLogin}/>
                        <Route exact path='/home' render={(props) => (
                            <Home {...props} imageArray={this.state.imageArray} />
                        )}/>
                        <Route path="/single/:id" component={Single}/>
                        <Route path="/profile" render={(props) => (
                            <Profile {...props} user={this.state.user}/>
                        )}/>
                        <Route exact path="/" render={(props) => (
                            <Login {...props} setUser={this.setUser}/>
                        )}/>

                        <Route path="/logout" render={(props) => (
                            <Logout {...props} setUser={this.setUser}/>
                        )}/>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
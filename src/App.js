import React, { Component } from 'react';
import Header from "./components/header/header";
import "./App.css";
import "./self.scss";

import Home from "./pages/Home";
import UserSpace from "./pages/UserSpace";
import Announcement from "./pages/Announcement";
import Live from "./pages/Live";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/userSpace" component={UserSpace}></Route>
                        <Route exact path="/announcement" component={Announcement}></Route>
                        <Route exact path="/live" component={Live}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

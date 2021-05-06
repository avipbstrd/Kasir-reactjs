import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {NavbarComponents} from './components';
import {Home, Sukses} from './Pages';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponents />
        <main>
          <switch>
            <Route path="/" component={Home} exact/>
            <Route path="/sukses" component={Sukses} exact/>
          </switch>
        </main>
      </BrowserRouter>
    )
  }
}

import React from 'react';

import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import './app.scss'
import Header from './components/header.js';
import ToDo from './components/todo/todo.js';
import Settings from './context/context';
import About from './pages/about'
import Files from './pages/Files'
import Error from './pages/Error'

export default class App extends React.Component {
  render() {
    return (
      <Router>
      <Settings>
        <Routes>
          <Route path="/" element={ [<Header/>,<ToDo />]}/>
      {/* <Header/>
      <ToDo /> */}
      <Route path="/about" element={<About/>}/>
      <Route path="/file" element={<Files/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes>
      </Settings>
      </Router>
    );
  }
}

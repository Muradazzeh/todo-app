import React from 'react';
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import './app.scss'
import Header from './components/header.js';
import ToDo from './components/todo/todo.js';
import Settings from './context/context';
export default class App extends React.Component {
  render() {
    return (
      <>
      <Settings>
      <Header/>
      <ToDo />
      </Settings>
      </>
    );
  }
}

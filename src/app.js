import React from 'react';
import './app.scss'
import Header from './components/header.js';
import ToDo from './components/todo/todo.js';
import setting from './context/context';
export default class App extends React.Component {
  render() {
    return (
      <>
      <setting>
      <Header/>
      <ToDo />
      </setting>
      </>
    );
  }
}

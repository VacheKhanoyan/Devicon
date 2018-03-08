import React from 'react';
import './App.css'
import 'devicon';
import Devicon from './devicon'


export default class App extends React.Component {

  render() {
    return (
      <div >
        <Devicon name="php"/>
        <Devicon name="javascript"/>
        <Devicon name="react"/>
        <Devicon name="git"/>
      </div>
    );
  }
}
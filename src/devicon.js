import React from 'react';
import 'devicon';
import './App.css'

export default class Devicon extends React.Component {
  constructor(props){
    super(props) 
      this.devicon=this.devicon.bind(this)
     }

  devicon(name){
    return <i class={`devicon-${name}-plain colored`}></i>
  }
  render () {
    
    return(
      <div className="devicon">
        {this.devicon(this.props.name)}          
      </div>
    )
  } 
}
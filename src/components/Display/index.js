import React from 'react'
import { DisBoard, DisRes, DisFunc } from "./styles"

class Display extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      val: []
    }
  }

  render(){
    return(    
    <DisBoard>
      <DisRes>oi</DisRes>
      <DisFunc>oi</DisFunc>
    </DisBoard>
    )
  }
}

export default Display
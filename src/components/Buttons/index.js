import React from 'react'
import { Btns, Btn, BtnN } from './styles'
 
class Buttons extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      show: [],
    }

  }


  render(){
    return(    
    <Btns>
      <Btn>T</Btn> 
      <Btn>AC</Btn> 
      <Btn>%</Btn> 
      <Btn>÷</Btn> 
      <BtnN>7</BtnN> 
      <BtnN>8</BtnN> 
      <BtnN>9</BtnN> 
      <Btn>x</Btn> 
      <BtnN>4</BtnN> 
      <BtnN>5</BtnN> 
      <BtnN>6</BtnN> 
      <Btn>-</Btn> 
      <BtnN>1</BtnN> 
      <BtnN>2</BtnN> 
      <BtnN>3</BtnN> 
      <Btn>+</Btn> 
      <BtnN>0</BtnN> 
      <BtnN>00</BtnN> 
      <Btn>.</Btn> 
      <Btn type="submit">=</Btn> 
    </Btns>
    )
  }


}

export default Buttons
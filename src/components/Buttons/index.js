import React from 'react'
import { Btns, Btn, BtnN } from './styles'
 
class Buttons extends React.Component{

  onClickToogle(event){
    event.preventDefault();
    this.props.setToogle(!this.props.toogle) 
  }
  
  onClickRes(event){
    event.preventDefault();
    let res =this.props.char
    this.props.setResults(res)
    
  }

  onButtonChar(event){
    if(this.props.char.length < 8){
      event.preventDefault();
      this.props.setChar(this.props.char + event.target.value)
    }
    event.preventDefault();
  }

  onClickAC(event){
    event.preventDefault();
    this.props.setChar("")
    this.props.setResults("") 
  }

  onClickClear(event){
    event.preventDefault();
    let c = this.props.char.split('')
    this.props.setChar(c.splice(0, c.length - 1).join(''))
  }

  render(){
 
    return(    
      <Btns>
        <Btn onClick={this.onClickAC.bind(this)}>AC</Btn> 
        <Btn onClick={this.onClickClear.bind(this)}>C</Btn> 
        <Btn>%</Btn> 
        <Btn onClick={this.onButtonChar.bind(this)} value="/">÷</Btn> 
        <BtnN onClick={this.onButtonChar.bind(this)} color = { this.props.toogle } value="7">7</BtnN> 
        <BtnN onClick={this.onButtonChar.bind(this)} color = { this.props.toogle } value="8">8</BtnN> 
        <BtnN onClick={this.onButtonChar.bind(this)} color = { this.props.toogle } value="9">9</BtnN> 
        <Btn onClick={this.onButtonChar.bind(this)} value="*">x</Btn> 
        <BtnN onClick={this.onButtonChar.bind(this)} color = { this.props.toogle } value="4">4</BtnN> 
        <BtnN onClick={this.onButtonChar.bind(this)} color = { this.props.toogle } value="5">5</BtnN> 
        <BtnN onClick={this.onButtonChar.bind(this)} color = { this.props.toogle } value="7">6</BtnN> 
        <Btn onClick={this.onButtonChar.bind(this)} value="-">-</Btn> 
        <BtnN onClick={this.onButtonChar.bind(this)} color = { this.props.toogle } value="1">1</BtnN> 
        <BtnN onClick={this.onButtonChar.bind(this)} color = { this.props.toogle } value="2">2</BtnN> 
        <BtnN onClick={this.onButtonChar.bind(this)} color = { this.props.toogle } value="3">3</BtnN> 
        <Btn onClick={this.onButtonChar.bind(this)} value="+">+</Btn> 
        <BtnN onClick={this.onClickToogle.bind(this)} color = { this.props.toogle }>T</BtnN> 
        <BtnN onClick={this.onButtonChar.bind(this)} color = { this.props.toogle } value="0">0</BtnN> 
        <Btn onClick={this.onButtonChar.bind(this)} value=".">.</Btn> 
        <Btn onClick={this.onClickRes.bind(this)}>=</Btn> 
      </Btns>
    )
  }


}

export default Buttons
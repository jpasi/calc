import React from 'react'
import { Btns, Btn, BtnN, Tgs, Tgm } from './styles'
import { ReactComponent as MoonIcon } from "../../assets/svg/moon.svg"
import { ReactComponent as SunIcon } from "../../assets/svg/sun.svg"
 
class Buttons extends React.Component{

  onClickToogle(event){
    event.preventDefault();
    this.props.setToogle(!this.props.toogle) 
  }
  
  onClickRes(event){
    event.preventDefault();
    let spt = this.props.char.split('')
    let fun = this.props.char
    let cnt
    let tofun
    let res

  
    if(spt.includes('%')){
      spt.pop()
      fun = spt.join('')


      for(let i = 0; i < spt.length; i++){
        if(isNaN(spt[i])){
          cnt = spt[i]
          tofun = fun.split(cnt)

        }
      }
  
      switch (cnt) {
        case '+':
          res = +tofun[0] + +(tofun[0]*(tofun[1]/100)).toFixed(2)
          break;
      
        case '-':
          res = +tofun[0] - (+tofun[0]*(+tofun[1]/100))
          break;
      
        case '*':
          res = +tofun[0] * (+tofun[0]*(+tofun[1]/100))
          break;
      
        case '/':
          res = +tofun[0] / (+tofun[0]*(+tofun[1]/100))
          break;
      
        default:
          break;
      }
      this.props.setResults(res)
    }else{

    for(let i = 0; i < spt.length; i++){
      if(isNaN(spt[i])){
        cnt = spt[i]
        tofun = fun.split(cnt)
      }
    }

    switch (cnt) {
      case '+':
        res = +tofun[0] + +tofun[1]
        break;
    
      case '-':
        res = +tofun[0] - +tofun[1]
        break;
    
      case '*':
        res = +tofun[0] * +tofun[1]
        break;
    
      case '/':
        res = +tofun[0] / +tofun[1]
        break;
    
      default:
        break;
    }
    this.props.setResults(res)
  }
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
        <Btn onClick={this.onButtonChar.bind(this)} value="%">%</Btn> 
        <Btn onClick={this.onButtonChar.bind(this)} value="/">÷</Btn> 
        <BtnN onClick={this.onButtonChar.bind(this)} toogle = { this.props.toogle } value="7">7</BtnN> 
        <BtnN onClick={this.onButtonChar.bind(this)} toogle = { this.props.toogle } value="8">8</BtnN> 
        <BtnN onClick={this.onButtonChar.bind(this)} toogle = { this.props.toogle } value="9">9</BtnN> 
        <Btn onClick={this.onButtonChar.bind(this)} value="*">x</Btn> 
        <BtnN onClick={this.onButtonChar.bind(this)} toogle = { this.props.toogle } value="4">4</BtnN> 
        <BtnN onClick={this.onButtonChar.bind(this)} toogle = { this.props.toogle } value="5">5</BtnN> 
        <BtnN onClick={this.onButtonChar.bind(this)} toogle = { this.props.toogle } value="7">6</BtnN> 
        <Btn onClick={this.onButtonChar.bind(this)} value="-">-</Btn> 
        <BtnN onClick={this.onButtonChar.bind(this)} toogle = { this.props.toogle } value="1">1</BtnN> 
        <BtnN onClick={this.onButtonChar.bind(this)} toogle = { this.props.toogle } value="2">2</BtnN> 
        <BtnN onClick={this.onButtonChar.bind(this)} toogle = { this.props.toogle } value="3">3</BtnN> 
        <Btn onClick={this.onButtonChar.bind(this)} value="+">+</Btn> 
        <Tgm onClick={this.onClickToogle.bind(this)} toogle = { this.props.toogle }>
          <MoonIcon />
        </Tgm> 
        <Tgs onClick={this.onClickToogle.bind(this)} toogle = { this.props.toogle }>
          <SunIcon />
        </Tgs> 
        <BtnN onClick={this.onButtonChar.bind(this)} toogle = { this.props.toogle } value="0">0</BtnN> 
        <Btn onClick={this.onButtonChar.bind(this)} value=".">.</Btn> 
        <Btn onClick={this.onClickRes.bind(this)}>=</Btn> 
      </Btns>
    )
  }


}

export default Buttons
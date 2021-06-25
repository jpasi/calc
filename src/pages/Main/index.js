import React from "react"
import Display from "../../components/Display"
import Buttons from "../../components/Buttons"
import { CalcBoard } from "./styles"


class Main extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      data: [],
      char: "",
      results: "",
      toogle: true
    }

  }

  
  render() {
    return(
      <>
        <CalcBoard toogle = { this.state.toogle }>
          <Display 
          char={this.state.char} 
          results={this.state.results}
          ></Display>
          <Buttons 
          char={this.state.char} 
          results={this.state.results} 
          toogle={this.state.toogle} 
          setChar={(v)=>this.setState({...this.state, char: v})} 
          setResults={(r)=>this.setState({results: r})}
          setToogle={(t)=>this.setState({toogle: t})}
          ></Buttons>
        </CalcBoard>
      </>
    )
  }

}

export default Main 
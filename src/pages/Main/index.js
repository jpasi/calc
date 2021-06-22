import React from "react"
import Display from "../../components/Buttons"
import Buttons from "../../components/Display"
import { CalcBoard } from "./styles"


class Main extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      data: []
    }

  }



  render() {
    return(
      <>
        <CalcBoard>
          <Buttons></Buttons>
          <Display></Display>
        </CalcBoard>
      </>
    )
  }

}

export default Main 
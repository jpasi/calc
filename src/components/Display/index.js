import React from 'react'
import { DisBoard, DisRes, DisFunc } from "./styles"

const Display = ({ char, results }) => {


  return(    
    <DisBoard>
      <DisRes>
        { results }
      </DisRes>
      <DisFunc>
        { char }
      </DisFunc>
    </DisBoard>
  )
}

export default Display
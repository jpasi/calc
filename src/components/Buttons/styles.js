import styled from "styled-components";

export const Btns = styled.form`
  height: 350px;
  width: 250px;
  margin: 0 25px 20px 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const BtnN = styled.button`
  background-color: ${(props) => (props.toogle === true) ? "#FF966B" : "#004080"};
  height: 50px;
  width: 50px;
  list-style: none;
  border-radius: 50px;
  text-align: center;
  color: #ffffff;
  padding: 15px;
  border: none;
  cursor: pointer;
`

export const Btn = styled.button`
  background-color:	#a9a9a9;
  height: 50px;
  width: 50px;
  list-style: none;
  border-radius: 50px;
  text-align: center;
  color: #ffffff;
  padding: 15px;
  border: none;
  cursor: pointer;
`

export const Tgm = styled.div`
background-color: ${(props) => (props.toogle === true) ? "#FF966B" : "#004080"};
height: 50px;
width: 50px;
list-style: none;
border-radius: 50px;
text-align: center;
padding: 15px;
border: none;
cursor: pointer;
display: ${(props) => (props.toogle === true) ? "none" : "block"};
svg{
  fill: var(--background);
  height: 30px;
  width: 30px;
  z-index: 0;
  margin: -5px;
}
`
export const Tgs = styled.div`
background-color: ${(props) => (props.toogle === true) ? "#FF966B" : "#004080"};
height: 50px;
width: 50px;
list-style: none;
border-radius: 50px;
text-align: center;
padding: 15px;
border: none;
cursor: pointer;
display: ${(props) => (props.toogle === true) ? "block" : "none"};
svg{
  fill: var(--background);
  height: 30px;
  width: 30px;
  z-index: 0;
  margin: -5px;
}
`


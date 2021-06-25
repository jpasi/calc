import styled from 'styled-components';

export const CalcBoard = styled.section`
  height: 500px;
  width: 300px;
  display: flex-box;
  border-color: ${(props) => (props.toogle === true) ? "#FF966B" : "#004080"};
  border-style: solid;
  background-color: ${(props) => (props.toogle === true) ? "#004080" : "#FF966B"};
`
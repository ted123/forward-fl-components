import styled, { keyframes } from 'styled-components';

const Arrows = keyframes` 
0%,
100% {
    width: 10px;
    height:30px;
    background-color:#a05da6;
    border:1px solid #ccc;
    position:relative; 
    transition: opacity 200ms;
    text-align: center;
    margin-right: 5px;
}
50% {
    width:10px;
    height:35px;
    transition: opacity 200ms;
    text-align: center
    z-index: 100;
    background-color:#7e4082;
    border:1px solid #ccc;
    position:relative;
    margin-right: 5px;
}`;
export const StyledArrowDiv = styled.div`
height: 100%;
display: flex;
align-items: center;
padding: 10px;
justify-content: center;
margin: auto;
`;
export const StyledArrowSpan = styled.span`
animation: ${Arrows} 1s ease-in-out infinite;
&:nth-child(2) {
    animation-delay: 0.1s;
  };
&:nth-child(3) {
    animation-delay: 0.2s;
  };
&:nth-child(4) {
    animation-delay: 0.3s;
  };
&:nth-child(5) {
    animation-delay: 0.4s;
  };
&:nth-child(6) {
    animation-delay: 0.5s;
`;

import styled from 'styled-components';

export const StyledContainer = styled.span`
display: flex;
flex-direction: row;
align-items: center;
`;
export const StyledRadio = styled.input<{checkedColor?:string}>`
appearance:none;
border:1px solid ${(props) => (props.checkedColor ? props.checkedColor : ' #2F353F')};
border-radius:50%;
margin-left: 7px;
margin-right: 7px;
transition-duration: 0.3s;  
cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
height: 15px;
width: 15px;
background: #FFFFFF;
&:checked {
    background: ${(props) => (props.checkedColor ? props.checkedColor : ' #2F353F')};
    text-align: center;
    color: #000000;
    box-shadow: inset 0 0 0 2px #FFFFFF;
`;

export const StyledLabel = styled.label<{fontWeight?:string}>`
font-weight: ${({ fontWeight }) => fontWeight};
margin: 1px;
`;

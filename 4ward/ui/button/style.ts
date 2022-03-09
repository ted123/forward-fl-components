import styled from 'styled-components';

export const StyledButton = styled.button<{buttonType?:string}>`
${(props) => props.buttonType === 'standard' && `
border: solid 1px #d5dbe1 ;
background-image: linear-gradient(#f1f3f5, #f1f3f5);
&:hover{
    border: solid 1px #c0c8cf;
};
`}
${(props) => props.buttonType === 'primary' && `
border: solid 1px #3887c8;
background-image: linear-gradient(to bottom,#65abe5 0, #4e8dcb 100%);
&:hover{
    border: solid 1px #205586;
};
`}
${(props) => props.buttonType === 'success' && `
border: solid 1px #228B22;
background-image: linear-gradient(to bottom,#238749 0 ,#238749 100%);
&:hover{
    border: solid 1px #14522e;
};
`}
${(props) => props.buttonType === 'danger' && `
border: solid 1px #ac2934;
background-image: linear-gradient(#bf2e3a,#bf2e3a);
&:hover{
    border: solid 1px #730b1d;
};
`}
border-radius: 2px;
background-repeat: repeat-x;
font-family: Open Sans, Helvetica, Arial, sans-serif;
inline-block:middle;
user-select:none;
opacity: ${(props) => (props.disabled ? '0.5' : '1')};
height: 2em;
line-height: 2em;
outline: none;
padding: 0;
position: relative;
color: ${(props) => (props.buttonType === 'standard' ? 'black' : '#ffff')};;
overflow: ellipsis;
cursor:${(props) => (props.disabled ? 'not-allowed' : 'default')};
display: block;
padding: 0 15px;
font-size: inherit;
font-weight: inherit;
font-style: normal;
text-decoration: none;
&:hover{
    cursor:${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
};
`;

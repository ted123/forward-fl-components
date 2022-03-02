import styled from 'styled-components';

export const StyledPrevArrow = styled.button`
    padding: 3px 5px;
    font-size: 16px;
    line-height: 1;
    color: #414c56;
    background-color: #f1f3f5;
    border:transparent;
    &[disabled] { opacity: 0.5 };
    position: relative;
    top: 1px;`;
export const StyledCurrent = styled.button`
    position: relative;
    top: 1px;
    font-weight: bold;
    color: #2F353F;`;
export const StyledPagesButton = styled.li<{active?: boolean, lastPage?:number, disabled?:boolean}>`
    display: inline-block;
    opacity:${(props) => (props.disabled ? '0.5' : '1')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    pointer-events:${(props) => (props.disabled ? 'none' : 'auto')};
    padding: 0 10px;
    user-select: none;
    border-right: 1px solid #c0c8cf;
    &:last-child, &.no-border { border-right: 1px transparent; };
    border-radius: 0;
    color:${(props) => (props.active ? '#2F353F' : '#2e7ab8')};
    &:nth-child(${(props) => (props.lastPage)}){
        border-right: none;
    };
    &:hover{
        border-bottom: 0.5px solid #c0c8cf;
    };
    `;
export const StyledEllipsis = styled.span`
    position: relative;
    padding: 0;
    color: #65727d;`;

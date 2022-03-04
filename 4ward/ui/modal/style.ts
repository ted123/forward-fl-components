import styled from 'styled-components';

export const Wrapper = styled.div`
    box-shadow: 1px 2px 4px 0 rgba(0,0,0,.16);
    position: fixed;
    top: 50%;
    left: 50%;
    background: #fff;
    border-radius: 4px;
    border-width: 5px 0 0 0;
    border-style: solid;
    color: #2f353f;
    opacity: 1;
    max-width: 750px;
    min-width: 400px;
    height: auto;
    max-height: 80%;
    overflow-y: auto;
    z-index: 1600;
    padding-right: 30px;
    padding-left: 10px;
    padding-bottom: 30px;
    transform: translateX(-50%) translateY(-50%);
    transition: opacity .3s;
`;

export const Backdrop = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
background: rgba(0, 0, 0, 0.3);
z-index: 500;
`;

export const SVG = styled.svg`
    fill: gray;
    width: 10px;
    height: 10px;
    path {
        stroke: gray;
        stroke-width: 40;
    }
`;

export const CloseButton = styled.button`
    border: none;
    background: none;
    color: #c1c8d1;
    margin: 0px -28px 0px 0px;
    float: right;
    :hover {
        SVG {
            border: 1px solid #402b56;
            border-radius: 50%;
            background-color: #402b56;
            fill: white;
            path {
                stroke: white;
                stroke-width: 40;
            }

        }
    }
`;

export const Content = styled.div`
padding: 10px;
max-height: 30rem;
overflow-x: hidden;
overflow-y: auto;
`;

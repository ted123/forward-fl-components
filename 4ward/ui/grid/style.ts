import styled from 'styled-components';

type StyledProps = {
  sortBy?: string;
  width?: string;
  bgc?: string;
};

export const Table = styled.div`
display: table;
position: relative;
width: 100%;
border-spacing: 0;
border-top: none;
border: 1px solid #c0c8cf;
font-style: normal;
font-variant-ligatures: normal;
font-variant-caps: normal;
font-variant-numeric: normal;
font-variant-east-asian: normal;
font-weight: normal;
font-stretch: normal;
font-size: 62.5%;
line-height: 1.375;
font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const SortButtons = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
position: inherit;
bottom: 10%;
text-align: center;
vertical-align: bottom;
  &.sortButton {
    transform: rotate(180deg);
  }

  &.sortReverse {
    transform: translateY(6px);
  }
`;

export const SVG = styled.svg`
fill: black;
width: 10px;
height: 10px;
`;

export const GridHeader = styled.div`
display: table-header-group;
background-color: #cad5dd;
`;

export const GridBody = styled.div`
display: table-row-group;
`;

export const GridRow = styled.div`
display: table-row;
  :nth-child(even){
      background-color: #f5f7f8;
  }
`;
export const GridCell = styled.div`
display: table-cell;
border-top: 1px solid #c0c8cf;
border-left: 1px solid #c0c8cf;
padding: 10px;
word-break: break-word;
white-space: normal;
`;

export const GridColumn = styled.div`
width: ${(props: StyledProps) => `${props.width}`};
display: table-cell;
padding: 10px;
border-top: 1px solid rgb(192, 200, 207);
border-left: 1px solid rgb(192, 200, 207);
`;

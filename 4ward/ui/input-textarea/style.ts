import styled from 'styled-components';

type StyledSpanProps = {
  labelWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold' | 'bolder' | 'lighter' | 'normal';
};

export const Container = styled.div`
    vertical-align: top;
    width: ${(props: { width: string }) => props.width};
`;

export const Label = styled.label`
    font-weight: ${(props: StyledSpanProps) => props.labelWeight}; 
    display: block;
    font-family: 'Open Sans','Helvetica Neue', Helvetica, Arial, sans-serif;
    margin-bottom: 0.5em;
`;

export const Span = styled.span`
    color: red;
`;

export const Textarea = styled.textarea`
    width: 100%;
    resize: none;
    box-shadow: inset 1px 1px 3px 0 rgb(0 0 0 / 12%);
    border: 1px solid #c0c8cf;
    padding: 5px 10px;
    outline: none;
    overflow: auto;
    font-size: ${(props: { fontSize:number }) => `${props.fontSize}`}px;
    line-height: ${(props: { fontSize:number }) => `${props.fontSize + 4}`}px;

    &:disabled {
        box-shadow: none
        opacity: 0.5
        cursor: not-allowed
    }

    &:readOnly {
        border: none;
        box-shadow: none;
    }

    &:focus {
        outline: 1px dashed #5e356b;
        border: 1px solid #5e356b;
    }
`;

import styled from 'styled-components';
import { CalendarIcon } from './calendar-icon';

export const StyledIcon = styled(CalendarIcon)`
    height: 16px;
    cursor: pointer;
    position: absolute;
    right: 5px;
`;

export const Container = styled.div<{focus?: boolean; disabled?: boolean}>`
    display: flex;
    position: relative;
    box-shadow: inset 1px 1px 3px 0 rgb(0 0 0 / 12%);
    border: 1px solid #c0c8cf;
    color: #494c52;

    ${({ focus }) => focus && `
        outline: none !important;
        border-color: #7e4082;
    `}

    ${({ disabled }) => disabled && `
        box-shadow: inset 1px 1px 3px 0 rgb(0 0 0 / 12%);
        border: 1px solid #c0c8cf;
        background-color: rgba(239, 239, 239, 0.3);
        color: #C6C6C6;

        ${StyledIcon} {
            cursor: default;
            fill: #C6C6C6;
        }
    `}

    input {
        border: none;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 25px;
        font-size: 14px;
        outline: none;
        padding-left: 5px;

        width: calc(100% - 30px);

        ::placeholder {
            color: #cdd3d9;
        }
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
`;

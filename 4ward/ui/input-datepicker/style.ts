import { CalendarIcon } from "./calendar-icon";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: relative;
    border: 1px solid;

    input {
        border: none;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 25px;
        font-size: 16px;
        outline: none;
    }
`

export const StyledIcon = styled(CalendarIcon)`
    height: 25px;
    cursor: pointer;
    position: absolute;
    right: 0;
`
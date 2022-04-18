import styled from 'styled-components';

export const Button = styled.button<{iconColor: string}>`
    background: none;
    border: none;

    ${({iconColor}) => `
        svg {
            fill: ${iconColor};
        }
    `}
`
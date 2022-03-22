import styled from 'styled-components';

export const OptionLabel = styled.label`
  padding: 0.3em 0.25em;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  background-color: #ffffff;

  &:hover {
    background-color: #eef1f3;
  }

  &:focus-within {
    background-color: #eef1f3;
  }
`;

import styled from 'styled-components';

export const Checkbox = styled.input`
  appearance: none;
  border: 1px solid #a59b9b;
  border-radius: 1px;
  transition-duration: 0.3s;
  cursor: pointer;
  height: 19px;
  width: 21px;
  background: #FFFFFF;

  &:checked + span::before {
    content: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'%3e%3cpath fill='currentColor' d='m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42Z'/%3e%3c/svg%3e");
    display: block;
    text-align: center;
    color: #000000;
    left: 0.6rem;
    top: 0.6rem;
    position: absolute;
  }
`;

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

export const LabelSpan = styled.span`
  width: 100%;
  overflow: hidden;
`;

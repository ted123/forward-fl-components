import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DisabledRadio, SelectedRadio, StandardRadio } from './input-radio.composition';
import { InputRadio } from './input-radio';

it('should render with the correct text', () => {
  const { getByText } = render(<StandardRadio />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
it('should render disabled radio', () => {
  const { getByText } = render(<DisabledRadio />);
  const rendered = getByText('hello world 2!');
  expect(rendered).toBeTruthy();
});
it('should render selected radio', () => {
  const { getByText } = render(<SelectedRadio />);
  const rendered = getByText('hello world 2!');
  expect(rendered).toBeTruthy();
});
it('should be disabled', () => {
  const { getByText } = render(<InputRadio disabled>hello world!</InputRadio>);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

it('should select radio button', () => {
  const handleOnChange = jest.fn();
  const { getByTestId } = render(
    <InputRadio
      onChange={handleOnChange}
    >
      hello world!
    </InputRadio>,
  );
  const checkbox = getByTestId('radio-hello world!');

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
});

import React from 'react';
import { render } from '@testing-library/react';
import { BasicInputCheckbox } from './input-checkbox.composition';
import { InputCheckbox } from './input-checkbox';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicInputCheckbox />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
it('should be diabled', () => {
  const { getByText } = render(<InputCheckbox disabled>hello world!</InputCheckbox>);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

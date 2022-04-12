import React from 'react';
import { render } from '@testing-library/react';
import { BasicInputDatepicker } from './input-datepicker.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicInputDatepicker />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

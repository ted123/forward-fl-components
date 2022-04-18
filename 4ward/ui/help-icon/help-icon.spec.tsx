import React from 'react';
import { render } from '@testing-library/react';
import { BasicHelpIcon } from './help-icon.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicHelpIcon />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

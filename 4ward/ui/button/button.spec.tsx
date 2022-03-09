import React from 'react';
import ReactDOM from 'react-dom';
import {
  render, cleanup, fireEvent, screen,
} from '@testing-library/react';
import { PrimaryButton } from './button.composition';
import { Button } from './button';

describe('initial test for loader component', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button buttonType="primary" />, div);
    expect(div).toBeTruthy();
  });

  it('should render correctly', () => {
    const basic = render(<PrimaryButton />);
    expect(basic).toBeTruthy();
  });
  it('should click successfully', () => {
    render(<Button buttonType="danger" />);
    fireEvent.click(screen.getByTestId('button'));
    expect(screen).toBeTruthy();
  });
});

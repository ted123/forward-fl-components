import React from 'react';
import ReactDOM from 'react-dom';
import {
  render, cleanup, fireEvent, screen,
} from '@testing-library/react';
import {
  PrimaryButton, DangerButton, StandardButton, DisabledButton, SuccessButton,
} from './button.composition';
import { Button } from './button';

describe('initial test for loader component', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button buttonType="primary" />, div);
    expect(div).toBeTruthy();
  });

  it('should render correctly', () => {
    const standard = render(<StandardButton />);
    const primary = render(<PrimaryButton />);
    const danger = render(<DangerButton />);
    const sucess = render(<SuccessButton />);
    const disabled = render(<DisabledButton />);
    expect(primary).toBeTruthy();
    expect(danger).toBeTruthy();
    expect(standard).toBeTruthy();
    expect(sucess).toBeTruthy();
    expect(disabled).toBeTruthy();
  });
  it('should click successfully', () => {
    render(<DangerButton />);
    fireEvent.click(screen.getByTestId('button'));
    expect(screen).toBeTruthy();
  });
});

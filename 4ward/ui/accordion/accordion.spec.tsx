import React from 'react';
import {
  render, fireEvent, cleanup, screen,
} from '@testing-library/react';
import { BasicAccordion } from './accordion.composition';
import { Accordion } from './accordion';

describe('Accordion initial test', () => {
  afterEach(cleanup);

  it('should render the BasicAccordion correctly', () => {
    const basic = render(<BasicAccordion />);
    expect(basic).toBeTruthy();
  });

  it('should show accordion content', () => {
    const { getByText } = render(<Accordion title="test"><p>test content</p></Accordion>);
    const accordionBtn = screen.getByRole('button', { name: /test/i });
    const content = getByText('test content');

    fireEvent.click(accordionBtn);

    expect(content).toBeInTheDocument();
    expect(content).toBeVisible();
  });

  it('should hide accordion content', () => {
    render(<Accordion title="test"><p>test content</p></Accordion>);
    const accordionBtn = screen.getByRole('button', { name: /test/i });
    const accordionContent = screen.getByTestId('content');

    fireEvent.click(accordionBtn);
    expect(getComputedStyle(accordionContent).maxHeight).toBe('auto');

    fireEvent.click(accordionBtn);
    expect(getComputedStyle(accordionContent).maxHeight).toBe('0');
  });
});

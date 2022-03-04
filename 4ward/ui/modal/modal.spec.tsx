import React from 'react';
import {
  render, cleanup, fireEvent, screen,
} from '@testing-library/react';
import { BasicModal } from './modal.composition';
import { Modal } from './modal';

describe('initial test for modal component', () => {
  const setShouldShowModal = jest.fn();
  afterEach(cleanup);

  it('should render modal component', () => {
    const modal = render(<Modal borderColorModal="red" open onClose={() => setShouldShowModal(false)} />);

    expect(modal).toBeTruthy();
  });

  it('should stop propagation in modal component', () => {
    const { queryByTestId } = render(<Modal borderColorModal="red" open onClose={() => setShouldShowModal(false)} />);
    const mockEvent = { stopPropagation: jest.fn() };

    fireEvent.click(queryByTestId('wrapperid'), mockEvent);
    expect(mockEvent.stopPropagation).toBeTruthy();
  });

  it('should render the basic modal component', () => {
    render(<BasicModal />);
    expect(screen.getByRole('button', { name: /Click To Show Modal/i })).toBeVisible();
  });

  it('should open and close the modal', () => {
    render(<BasicModal />);
    let xvalue = false;
    const { getByTestId } = render(<Modal borderColorModal="red" open={xvalue} onClose={() => setShouldShowModal(xvalue)} />);

    fireEvent.click(getByTestId('showmodalbutton'));
    expect(screen.getByTestId('backdropid')).toBeTruthy();
    xvalue = true;
    fireEvent.change(getByTestId('closebuttonid'), { target: { value: xvalue } });
    fireEvent.click(getByTestId('closebuttonid'));
    expect(getByTestId('showmodalbutton')).toBeInTheDocument();
  });
});

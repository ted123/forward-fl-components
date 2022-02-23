import React from 'react';
import ReactDOM from 'react-dom';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import { BasicToaster } from './toaster.composition';
import { Toaster } from './toaster';

describe('initial test for toaster component', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Toaster />, div);
    expect(div).toBeTruthy();
  });

  it('should render correctly', () => {
    const basic = render(<BasicToaster />);

    expect(basic).toBeTruthy();
  });

  it('should render toast correctly', () => {
    const data = [{
      type: 'Success',
      title: 'Success!',
      description: 'This is a success toast component!',
    }];

    render(<Toaster data={data} />);
    const title = screen.getByText(/success!/i);
    const desc = screen.getByText(/This is a success toast component!/i);

    expect(title).toHaveTextContent(data[0].title);
    expect(desc).toHaveTextContent(data[0].description);
  });

  it('should close toast', () => {
    const data = [{
      type: 'Success',
      title: 'Success!',
      description: 'This is a success toast component!',
    }];

    render(<Toaster data={data} />);
    const closebtn = screen.getByRole('button', { name: /x/i });

    fireEvent.click(closebtn);

    expect(data.length).toBe(0);
  });
});

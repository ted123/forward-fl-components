import React from 'react';
import {
  render, cleanup, fireEvent, screen,
} from '@testing-library/react';
import { BasicGrid } from './grid.composition';
import { Grid } from './grid';

describe('initial test for modal component', () => {
  afterEach(cleanup);

  it('should render Grid component', () => {
    const grid = render(<Grid />);

    expect(grid).toBeTruthy();
  });

  it('should render BasicGrid component', () => {
    const basicgrid = render(<BasicGrid />);

    expect(basicgrid).toBeTruthy();
  });

  it('should render BasicGrid component and Sort', () => {
    const basicgrid = render(<BasicGrid />);

    expect(screen.getByTestId('SortButtonIdFirstNameascn')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('SortButtonIdFirstNameascn'));
    expect(screen.getByTestId('SortButtonIdFirstNamedesc')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('SortButtonIdFirstNamedesc'));
    expect(screen.getByTestId('SortButtonIdFirstNameascn')).toBeInTheDocument();

    expect(basicgrid).toBeTruthy();
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import {
  render, cleanup,
} from '@testing-library/react';
import { BasicLoader } from './loader.composition';
import { Loader } from '.';

describe('initial test for loader component', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loader />, div);
    expect(div).toBeTruthy();
  });

  it('should render correctly', () => {
    const basic = render(<BasicLoader />);
    expect(basic).toBeTruthy();
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import { BasicHelpIcon } from './help-icon.composition';

it('should render correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BasicHelpIcon />,
    div,
  );
  expect(div).toBeTruthy();
});

import React from 'react';
import { Button } from './button';

const Log = () => {
  console.log('I am Clicked hooray');
};
export const StandardButton = () => (
  <div>
    <Button buttonType="standard" onClick={Log}>I am a Button</Button>
  </div>
);
export const PrimaryButton = () => (
  <div>
    <Button buttonType="primary" onClick={Log} aria-label="primary">I am a button</Button>
  </div>
);
export const SuccessButton = () => (
  <div>
    <Button buttonType="success" onClick={Log} aria-label="success">I am a button</Button>
  </div>
);
export const DangerButton = () => (
  <div>
    <Button buttonType="danger" onClick={Log} aria-label="danger">I am a button</Button>
  </div>
);
export const DisabledButton = () => (
  <div>
    <Button buttonType="primary" onClick={Log} aria-label="primary" disabled>I am a disabled button</Button>
  </div>
);

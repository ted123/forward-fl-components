import React from 'react';
import { InputRadio } from './input-radio';

export const StandardRadio = () => (
  <div>
    <InputRadio radioName="hello" fontWeight="bold">hello world!</InputRadio>
    <InputRadio radioName="hello">hello world 2!</InputRadio>

  </div>
);
export const DisabledRadio = () => (
  <div>
    <InputRadio radioName="hello" disabled>hello world 2!</InputRadio>
  </div>
);
export const SelectedRadio = () => (
  <div>
    <InputRadio radioName="hello" selected>hello world 2!</InputRadio>
  </div>
);

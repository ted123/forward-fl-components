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
    <InputRadio radioName="hello2" selected>hello world 2!</InputRadio>
  </div>
);
export const ColoredRadio = () => (
  <div>
    <InputRadio radioName="helloColored" selected checkedColor="blue">hello world 2!</InputRadio>
  </div>
);

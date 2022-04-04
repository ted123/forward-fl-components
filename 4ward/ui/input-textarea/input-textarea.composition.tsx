import React, { useState } from 'react';
import { InputTextarea } from './input-textarea';

const id = '123-2';
const name = 'text';

export const BasicInputTextarea = () => {
  const [value, setValue] = useState('');

  return (
    <InputTextarea
      value={value}
      label="Sample 1"
      width="250px"
      id={id}
      name={name}
      minRows={3}
      labelWeight="bold"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const BasicInputTextareaMaxLength = () => {
  const [value, setValue] = useState('');

  return (
    <InputTextarea
      value={value}
      label="Sample maxLength 5"
      width="250px"
      id={id}
      name={name}
      minRows={3}
      maxLength={5}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const BasicInputTextareaDisabled = () => {
  const [value, setValue] = useState('Test');

  return (
    <InputTextarea
      disabled
      value={value}
      label="Sample Disabled"
      id={id}
      name={name}
      minRows={3}
      width="250px"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const BasicInputTextareaReadOnly = () => {
  const [value, setValue] = useState('Test');

  return (
    <InputTextarea
      readOnly
      value={value}
      label="Sample Read only"
      id={id}
      name={name}
      minRows={3}
      width="250px"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const BasicInputTextareaRequired = () => {
  const [value, setValue] = useState('');

  return (
    <InputTextarea
      required
      value={value}
      label="With required prop"
      id={id}
      fontSize={10}
      name={name}
      minRows={3}
      width="250px"
      maxRows={6}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

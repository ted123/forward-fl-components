import React, { useState } from 'react';
import { InputText } from './input-text';

const id = '10009-text';
const name = 'userInput';

export const BasicInputText = () => {
  const [value, setValue] = useState('');

  return (
    <InputText
      label="small"
      value={value}
      id={id}
      name={name}
      placeholder="Type here"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const InputTextLarge = () => {
  const [value, setValue] = useState('');

  return (
    <InputText
      size="large"
      label="Large"
      value={value}
      id={id}
      name={name}
      placeholder="Type here"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const InputSearchLarge = () => {
  const [value, setValue] = useState('');

  return (
    <InputText
      searchIcon
      type="search"
      size="large"
      value={value}
      id={id}
      name={name}
      placeholder="Type here"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const InputSearch = () => {
  const [value, setValue] = useState('');

  return (
    <InputText
      searchIcon
      value={value}
      type="search"
      id={id}
      name={name}
      placeholder="Search here"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const InputNumber = () => {
  const [value, setValue] = useState('');

  return (
    <InputText
      value={value}
      type="number"
      id={id}
      width="100px"
      name={name}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const InputDisabled = () => {
  const [value, setValue] = useState('');

  return (
    <InputText
      disabled
      searchIcon
      value={value}
      id={id}
      name={name}
      placeholder="Type here"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const InputTextReadOnly = () => {
  const [value, setValue] = useState('');

  return (
    <InputText
      readOnly
      value={value}
      id={id}
      name={name}
      placeholder="Type here"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const InputTextRequired = () => {
  const [value, setValue] = useState('');

  return (
    <InputText
      required
      value={value}
      label="Required"
      id={id}
      name={name}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const InputTextMaxLenghtChar5 = () => {
  const [value, setValue] = useState('');

  return (
    <InputText
      value={value}
      id={id}
      name={name}
      maxLength={5}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const InputMaxNum10 = () => {
  const [value, setValue] = useState('');

  return (
    <InputText
      id={id}
      name={name}
      value={value}
      min={1}
      max={10}
      width="100px"
      type="number"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

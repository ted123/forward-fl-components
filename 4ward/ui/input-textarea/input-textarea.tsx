import React, {
  ChangeEvent, ReactNode, useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import {
  Container, Textarea, Label, Span,
} from './style';

export type InputTextareaProps = {
  /** Disabled textbox */
  disabled?: boolean;

  /** Width of the textbox wrapper */
  width?: string;

  /** Input value */
  value?: string;

  /** Textarea font-size in pixel */
  fontSize?: number,

  /** Defines the minimum height in rows */
  minRows?: number;

  /** Defines the maximum height in rows */
  maxRows?: number;

  /** Defines the minimum length of characters */
  minLength? : number;

  /** Defines the maximum length of characters */
  maxLength?: number;

  label?: ReactNode | string;
  labelWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold' | 'bolder' | 'lighter' | 'normal';
  id?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  readOnly?: boolean;
  onChange?: (e:ChangeEvent<HTMLTextAreaElement>) => void;
};

export function InputTextarea({
  label,
  value,
  placeholder,
  id,
  name,
  onChange,
  disabled = false,
  required = false,
  readOnly = false,
  labelWeight = 'normal',
  width = '550px',
  fontSize = 14,
  minRows = 2,
  maxRows = 10,
  maxLength = 900,
  minLength = 100,
}: InputTextareaProps) {
  const [inputValue, setInputValue] = useState(value);
  const textAreaRef = useRef(null);
  const [rows, setRows] = useState(minRows);

  const labelText = required ? (
    <>
      {label}
      <Span>&#42;</Span>
    </>
  ) : <>{label}</>;

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useLayoutEffect(() => {
    const textareaLineHeight = fontSize + 4;
    const textArea = textAreaRef.current;
    const previousRows = textArea.rows;
    textArea.rows = minRows; // reset number of rows in textarea

    const currentRows = Math.floor(Math.abs(textArea.scrollHeight / textareaLineHeight)) || minRows;

    if (currentRows === previousRows) {
      textArea.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      textArea.rows = maxRows;
      textArea.scrollTop = textArea.scrollHeight;
    }

    const numRows = currentRows < maxRows ? currentRows : maxRows;
    setRows(numRows);
  }, [inputValue]);

  const handleChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Container width={width}>
      <Label labelWeight={labelWeight}>{labelText}</Label>
      <Textarea
        ref={textAreaRef}
        rows={rows}
        fontSize={fontSize}
        disabled={disabled}
        placeholder={placeholder}
        readOnly={readOnly}
        value={inputValue}
        id={id}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        onChange={onChange || handleChange}
      />
    </Container>
  );
}

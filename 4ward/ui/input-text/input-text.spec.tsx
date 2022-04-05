import React from 'react';
import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  BasicInputText,
  InputDisabled,
  InputMaxNum10,
  InputNumber,
  InputSearch,
  InputSearchLarge,
  InputTextLarge,
  InputTextMaxLenghtChar5,
  InputTextReadOnly,
  InputTextRequired,
} from './input-text.composition';
import { InputText } from './input-text';

const onChange = jest.fn();

describe('Multi-filter test', () => {
  afterEach(cleanup);

  it('should render basic input', () => {
    const value = 'text-test1';
    const input = render(<BasicInputText />);
    const text = screen.getByTestId('input-text');

    fireEvent.change(text, { target: { value } });
    expect(text).toHaveValue('text-test1');
    expect(input).toBeTruthy();
  });

  it('should render sample input size large', () => {
    const value = 'text-test2';
    const input = render(<InputTextLarge />);
    const text = screen.getByTestId('input-text');

    fireEvent.change(text, { target: { value } });
    expect(text).toHaveValue('text-test2');
    expect(input).toBeTruthy();
  });

  it('should render sample search input size large', () => {
    const value = 'text-test3';
    const input = render(<InputSearchLarge />);
    const text = screen.getByTestId('input-text');

    fireEvent.change(text, { target: { value } });
    expect(text).toHaveValue('text-test3');
    expect(input).toBeTruthy();
  });

  it('should render sample search input', () => {
    const value = 'text-test4';
    const input = render(<InputSearch />);
    const text = screen.getByTestId('input-text');

    fireEvent.change(text, { target: { value } });
    expect(text).toHaveValue('text-test4');
    expect(input).toBeTruthy();
  });

  it('should render sample input number', () => {
    const value = 2;
    const input = render(<InputNumber />);
    const text = screen.getByTestId('input-text');

    fireEvent.change(text, { target: { value } });
    expect(text).toHaveValue(2);
    expect(input).toBeTruthy();
  });

  it('should render sample input disabled', () => {
    const value = 'text-test6';
    const input = render(<InputDisabled />);
    const text = screen.getByTestId('input-text');

    fireEvent.change(text, { target: { value } });
    expect(text).toHaveValue('text-test6');
    expect(input).toBeTruthy();
  });

  it('should render sample input text read only', () => {
    const value = 'text-test7';
    const input = render(<InputTextReadOnly />);
    const text = screen.getByTestId('input-text');

    fireEvent.change(text, { target: { value } });
    expect(text).toHaveValue('text-test7');
    expect(input).toBeTruthy();
  });

  it('should render sample input required', () => {
    const value = 'text-test8';
    const input = render(<InputTextRequired />);
    const text = screen.getByTestId('input-text');

    fireEvent.change(text, { target: { value } });
    expect(text).toHaveValue('text-test8');
    expect(input).toBeTruthy();
  });

  it('should render sample input maxLength', () => {
    const value = 'text-test10';
    const input = render(<InputTextMaxLenghtChar5 />);
    const text = screen.getByTestId('input-text');

    fireEvent.change(text, { target: { value } });
    expect(text).toHaveValue('text-test10');
    expect(input).toBeTruthy();
  });

  it('should render sample input number max', () => {
    const value = 1;
    const input = render(<InputMaxNum10 />);
    const text = screen.getByTestId('input-text');

    fireEvent.change(text, { target: { value } });
    expect(text).toHaveValue(1);
    expect(input).toBeTruthy();
  });

  it('should be able to type on the text input field', () => {
    render(<InputText onChange={onChange} />);
    const text = screen.getByTestId('input-text');

    userEvent.type(text, 'sample input text test');
    expect(text).toHaveValue('sample input text test');
  });

  it('should be clear input value when x is click', () => {
    render(<InputText onChange={onChange} value="test" />);
    const text = screen.getByTestId('input-text');
    const clear = screen.getByTestId('clear');

    expect(clear).toBeTruthy();
    fireEvent.click(clear);
    expect(text).toHaveValue('');
  });

  it('should successfully disabled the textarea', () => {
    render(<InputText disabled onChange={onChange} />);
    const text = screen.getByTestId('input-text');
    expect(text).toBeDisabled();
  });

  it('should have read only accessibility in the textarea', () => {
    render(<InputText readOnly onChange={onChange} />);
    const text = screen.getByTestId('input-text');
    expect(text).toHaveAttribute('readonly');
  });

  it('should render label value correctly', () => {
    const { getByText } = render(<InputText label="Label Text" onChange={onChange} />);
    const label = getByText('Label Text');

    expect(label).toBeTruthy();
    expect(label.innerHTML).toEqual('Label Text');
  });
});

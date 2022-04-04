import React from 'react';
import {
  render, cleanup, screen, fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  BasicInputTextarea,
  BasicInputTextareaDisabled,
  BasicInputTextareaMaxLength,
  BasicInputTextareaReadOnly,
  BasicInputTextareaRequired,
} from './input-textarea.composition';
import { InputTextarea } from './input-textarea';

describe('Multi-filter test', () => {
  afterEach(cleanup);

  it('should render the sample basic editable', () => {
    const value = 'test1';
    const basic = render(<BasicInputTextarea />);
    const textarea = screen.getByRole('textbox');

    fireEvent.change(screen.getByRole('textbox'), { target: { value } });
    expect(textarea).toHaveValue('test1');
    expect(basic).toBeTruthy();
  });

  it('should render the sample basic with maxLength textarea field', () => {
    const value = 'test2';
    const basic = render(<BasicInputTextareaMaxLength />);
    const textarea = screen.getByRole('textbox');

    fireEvent.change(screen.getByRole('textbox'), { target: { value } });
    expect(textarea).toHaveValue('test2');
    expect(basic).toBeTruthy();
  });

  it('should render the sample basic disabled', () => {
    const value = 'test3';
    const basic = render(<BasicInputTextareaDisabled />);
    const textarea = screen.getByRole('textbox');

    fireEvent.change(screen.getByRole('textbox'), { target: { value } });
    expect(textarea).toHaveValue('test3');
    expect(basic).toBeTruthy();
  });

  it('should render the sample basic read only', () => {
    const value = 'test4';
    const basic = render(<BasicInputTextareaReadOnly />);
    const textarea = screen.getByRole('textbox');

    fireEvent.change(screen.getByRole('textbox'), { target: { value } });
    expect(textarea).toHaveValue('test4');
    expect(basic).toBeTruthy();
  });

  it('should render the sample basic with required', () => {
    const value = 'test5';
    const basic = render(<BasicInputTextareaRequired />);
    const textarea = screen.getByRole('textbox');

    fireEvent.change(screen.getByRole('textbox'), { target: { value } });
    expect(textarea).toHaveValue('test5');
    expect(basic).toBeTruthy();
  });

  it('should successfully disabled the textarea', () => {
    render(<InputTextarea disabled />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDisabled();
  });

  it('should have read only accessibility in the textarea', () => {
    render(<InputTextarea readOnly />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('readonly');
  });

  it('should be able to type on the textarea field', () => {
    render(<InputTextarea />);
    const textarea = screen.getByRole('textbox');

    userEvent.type(textarea, 'sample test');
    expect(textarea).toHaveValue('sample test');
  });

  it('should render label value correctly', () => {
    const { getByText } = render(<InputTextarea label="Label" />);
    const label = getByText('Label');

    expect(label).toBeTruthy();
    expect(label.innerHTML).toEqual('Label');
  });

  it('should resize the textarea height depends on the min row', async () => {
    render(<InputTextarea placeholder="Type here" id="test-1-1" minRows={2} maxRows={2} />);

    const textarea = screen.getByRole('textbox');
    const el = document.getElementById('test-1-1') as HTMLTextAreaElement;

    userEvent.type(textarea, 'Row1,{enter}Row2,{enter}Row3');
    expect(textarea).toHaveValue('Row1,\nRow2,\nRow3');
    expect(el.rows).toEqual(2);
  });
});

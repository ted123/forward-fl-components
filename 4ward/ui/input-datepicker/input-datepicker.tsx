import React, { useState, useRef } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledIcon, Container, IconWrapper } from './style';

const noop = () => {};

export type InputDatepickerProps = {
  /**
   * initial highlighted/selected date in the calendar (ISO string fromat)
   */
  initDate?: string
  /**
   * event listener when user changes input value
   */
  onChange: (val:Date) => void
  /**
   * event listener when input has been focused
   */
  onFocus?: () => void
  /**
   * event listener when input has lost focus
   */
  onBlur?: () => void
  /**
   * event listener when calendar pop up closes
  */
  onCalendarClose?: () => void
  /**
   * turns the input to disabled state if set to true
  */
  disabled?: boolean
};

export function InputDatepicker({
  initDate = new Date().toISOString(),
  onChange = noop,
  onFocus = noop,
  onBlur = noop,
  onCalendarClose = noop,
  disabled,
  ...rest
}:InputDatepickerProps&ReactDatePickerProps) {
  const [startDate, setStartDate] = useState(new Date(initDate));
  const [isFocused, setIsFocused] = useState(false);
  const datePickerRef = useRef(null);

  return (
    <Container focus={isFocused} disabled={disabled}>
      <DatePicker
        disabled={disabled}
        selected={startDate}
        onChange={(date, e) => {
          const newDate = date || new Date(initDate);
          setStartDate(newDate);
          onChange(newDate);
        }}
        onFocus={() => {
          setIsFocused(true);
          onFocus();
        }}
        onBlur={() => {
          setIsFocused(false);
          onBlur();
        }}
        onCalendarClose={() => {
          setIsFocused(false);
          onCalendarClose();
        }}
        ref={datePickerRef}
        customInput={<input data-testid="calendar-picker" type="text" />}
        {...rest}
      />
      <IconWrapper
        data-testid="calendar-icon"
        onClick={() => {
          datePickerRef?.current?.input?.click();
          datePickerRef?.current?.input?.focus();
        }}>
        <StyledIcon/>
      </IconWrapper>
    </Container>
  );
}

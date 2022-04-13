import React, { ReactNode, useState, forwardRef, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from './calendar-icon';
import { StyledIcon, Container, IconWrapper } from './style';

export type InputDatepickerProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function InputDatepicker({ children }: InputDatepickerProps) {
  const [startDate, setStartDate] = useState(new Date());
  const [isFocused, setIsFocused] = useState(false);
  const datePickerRef = useRef(null);

  return (
    <Container style={{width: '150px'}} focus={isFocused}>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date || new Date())
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false)
        }}
        onCalendarClose={() => {
          setIsFocused(false)
        }}
        ref={datePickerRef}
      />
      <IconWrapper onClick={() => { 
        datePickerRef?.current?.input?.click();
        datePickerRef?.current?.input?.focus();
      }}>
        <StyledIcon/>
      </IconWrapper>
    </Container>
  );
}

import React, { ReactNode, useState, forwardRef, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from './calendar-icon';
import { StyledIcon, Container } from './style';

export type InputDatepickerProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function InputDatepicker({ children }: InputDatepickerProps) {
  const [startDate, setStartDate] = useState(new Date());
  const datePickerRef = useRef(null);

  return (
    <Container style={{width: '150px'}}>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date || new Date())
        }}
        onFocus={() => console.log('ni focus siya te')}
        ref={datePickerRef}
      />
      <div onClick={() => { 
        datePickerRef?.current?.input?.click();
        datePickerRef?.current?.input?.focus();
      }}>
        <StyledIcon/>
      </div>
    </Container>
  );
}

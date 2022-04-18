import React from 'react';
import { InputDatepicker } from './input-datepicker';

export const BasicInputDatepicker = () => (
    <div style={{ width: '150px' }}>
      <InputDatepicker onChange={(date) => console.log(date)}/>
    </div>
);

export const Disabled = () => (
    <div style={{ width: '150px' }}>
      <InputDatepicker disabled onChange={(date) => console.log(date)}/>
    </div>
);

export const WithMinAndMaxDates = () => (
    <div style={{ width: '150px' }}>
      <InputDatepicker minDate={new Date('04/01/2022')} maxDate={new Date('4/29/2022')} onChange={(date) => console.log(date)}/>
    </div>
);

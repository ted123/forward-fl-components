import React from 'react';
import {
  act, fireEvent, render, screen,
} from '@testing-library/react';
import { InputDatepicker } from './input-datepicker';

describe('InputDatepicker', () => {
  it('should show calendar when clicked', async () => {
    let isOpen = false;
    const test = render(<InputDatepicker
      onChange={(date) => console.log(date)}
      initDate="2022-02-21T01:29:56.168Z"
      onCalendarOpen={() => isOpen = true}
    />);

    const input = await screen.findByTestId('calendar-picker');
    act(() => {
      fireEvent.click(input);
    });
    await act(async () => await null); // popper issue in react-datepicker https://github.com/floating-ui/react-popper/issues/350
    expect(isOpen).toBe(true);
    expect(test).toMatchSnapshot();
  });

  it('should NOT show calendar when disabled', async () => {
    let isOpen = false;
    const test = render(<InputDatepicker
      onChange={(date) => console.log(date)}
      initDate="2022-02-21T01:29:56.168Z"
      onCalendarOpen={() => isOpen = true}
      disabled
    />);

    const input = await screen.findByTestId('calendar-picker');
    act(() => {
      fireEvent.click(input);
    });
    await act(async () => await null); // popper issue in react-datepicker https://github.com/floating-ui/react-popper/issues/350
    expect(isOpen).toBe(false);
    expect(test).toMatchSnapshot();
  });

  it('should deafult to initial date when input is emptied', async () => {
    let isOpen = false;
    let currentValue;
    const initDate = '2022-02-21T01:29:56.168Z';
    const test = render(<InputDatepicker
      onChange={(date) => currentValue = date}
      initDate={initDate}
      onCalendarOpen={() => isOpen = !isOpen}
    />);

    const input = await screen.findByTestId<HTMLInputElement>('calendar-picker');
    act(() => {
      fireEvent.click(input);
      fireEvent.change(input, { target: { value: null } });
      fireEvent.blur(input);
    });
    await act(async () => await null); // popper issue in react-datepicker https://github.com/floating-ui/react-popper/issues/350
    expect(isOpen).toBe(true);
    expect(test).toMatchSnapshot();
    expect(currentValue.toISOString()).toBe(initDate);
  });

  it('should show focused styling when focused', async () => {
    let isOpen = false;
    const test = render(<InputDatepicker
      onChange={(date) => console.log(date)}
      initDate="2022-02-21T01:29:56.168Z"
      onCalendarOpen={() => isOpen = true}
    />);

    const input = await screen.findByTestId('calendar-picker');
    act(() => {
      fireEvent.focus(input);
    });
    await act(async () => await null); // popper issue in react-datepicker https://github.com/floating-ui/react-popper/issues/350
    expect(isOpen).toBe(true);
    expect(test).toMatchSnapshot();
  });

  it('should show calendar when icon is clicked', async () => {
    let isOpen = false;
    const test = render(<InputDatepicker
      onChange={(date) => console.log(date)}
      initDate="2022-02-21T01:29:56.168Z"
      onCalendarOpen={() => isOpen = true}
    />);

    const input = await screen.findByTestId('calendar-icon');
    act(() => {
      fireEvent.click(input);
    });
    await act(async () => await null); // popper issue in react-datepicker https://github.com/floating-ui/react-popper/issues/350
    expect(isOpen).toBe(true);
    expect(test).toMatchSnapshot();
  });
});

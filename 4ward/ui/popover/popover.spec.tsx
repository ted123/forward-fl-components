import React from 'react';
import ReactDOM from 'react-dom';
import {
  render, cleanup,
} from '@testing-library/react';
import { Popover } from '.';

describe('Popover Component test', () => {
  const isClick = true;

  afterEach(cleanup);

  it('should render with the correct text', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Popover
        content="Lorem ipsum may be used as a placeholder before the final copy is available."
        position="bottom"
        color="#238749"
        show={isClick}
      >
        Hello world!
      </Popover>, div,
    );
    expect(div).toBeTruthy();
  });

  it('should show popover - bottom', () => {
    const tree = render(
      <Popover
        content="Lorem ipsum may be used as a placeholder before the final copy is available."
        position="bottom"
        color="#238749"
        show
      >
        Hello World!
      </Popover>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should show popover - top', () => {
    const tree = render(
      <Popover
        content="Lorem ipsum may be used as a placeholder before the final copy is available."
        position="top"
        color="#238749"
        show={isClick}
      >
        Hello World!
      </Popover>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should show popover - right', () => {
    const tree = render(
      <Popover
        content="Lorem ipsum may be used as a placeholder before the final copy is available."
        position="right"
        color="#238749"
        show={isClick}
      >
        Hello World!
      </Popover>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should show popover - left', () => {
    const tree = render(
      <Popover
        content="Lorem ipsum may be used as a placeholder before the final copy is available."
        position="left"
        color="#238749"
        show={isClick}
      >
        Hello World!
      </Popover>,
    );
    expect(tree).toMatchSnapshot();
  });
});

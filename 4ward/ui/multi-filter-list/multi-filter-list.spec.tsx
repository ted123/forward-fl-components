import React from 'react';
import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MultiFilterListItem } from '@4ward/ui.multi-filter-list-item';
import { BasicMultiFilterList } from './multi-filter-list.composition';
import { MultiFilterList } from './multi-filter-list';

let container;
const onSelectChange = jest.fn();

const data = [{
  key: '1',
  value: '1',
  label: 'One',
}, {
  key: '2',
  value: '2',
  label: 'Two',
}, {
  key: '3',
  value: '3',
  label: 'Three',
}, {
  key: '4',
  value: '4',
  label: 'Four',
}];

describe('Multi-filter test', () => {
  beforeEach(() => {
    container = render(
      <MultiFilterList
        label="Test"
        selected={[{
          key: '3',
          value: '3',
          label: 'Three',
        }]}
        onSelectChange={onSelectChange}
      >
        {data.map((d) => (
          <MultiFilterListItem
            key={d.key}
            item={d as any}
          >
            {d.label}
          </MultiFilterListItem>
        ))}
      </MultiFilterList>,
    );
  });

  afterEach(cleanup);

  it('should render correctly', () => {
    const basic = render(<BasicMultiFilterList />);
    expect(basic).toBeTruthy();
  });

  it('should render MultiFilterTest correctly', () => {
    expect(container).toBeTruthy();
  });

  it('should render label props correctly', () => {
    container = render(
      <MultiFilterList
        selected={[]}
        onSelectChange={onSelectChange}
      >
        {data.map((d) => (
          <MultiFilterListItem
            key={d.key}
            item={d as any}
          >
            {d.label}
          </MultiFilterListItem>
        ))}
      </MultiFilterList>,
    );

    const { getByText } = container;
    const label = getByText('Label');

    expect(label).toBeTruthy();
    expect(label.innerHTML).toEqual('Label');
  });

  it('should render default label value correctly', () => {
    const { getByText } = container;
    const label = getByText('Test');

    expect(label).toBeTruthy();
    expect(label.innerHTML).toEqual('Test');
  });

  it('should render items', () => {
    const { getAllByText } = container;

    data.forEach((d) => {
      const [labelText] = getAllByText(d.label);

      expect(labelText).toBeTruthy();
    });
  });

  it('should enable button dropdown', () => {
    const dropDownButton = screen.getByRole('button', { name: /Three/i });

    expect(dropDownButton).toHaveTextContent('Three');
    expect(dropDownButton).toBeEnabled();
  });

  it('should disable button dropdown', () => {
    container = render(
      <MultiFilterList
        label="Test"
        selected={[]}
        disabled
        onSelectChange={onSelectChange}
      >
        {data.map((d) => (
          <MultiFilterListItem
            key={d.key}
            item={d as any}
          >
            {d.label}
          </MultiFilterListItem>
        ))}
      </MultiFilterList>,
    );

    const buttonDisabled = screen.getByRole('button', { name: /All/i });

    expect(buttonDisabled).toHaveTextContent('All');
    expect(buttonDisabled).toBeDisabled();
  });

  it('should disable select all button after click', () => {
    const { getByText } = container;
    const selectAllBtn = getByText('Select All');

    fireEvent.click(selectAllBtn);

    const dropDownButton = screen.getByRole('button', { name: /All/i });

    expect(dropDownButton).toHaveTextContent('All');
    expect(selectAllBtn).toBeTruthy();
    expect(selectAllBtn).toBeDisabled();
  });

  it('should disable clear all button after click', () => {
    const dropDownButton = screen.getByRole('button', { name: /Three/i });

    fireEvent.click(dropDownButton);

    const clearAllBtn = screen.getByTestId('clear-all');
    fireEvent.click(clearAllBtn);
    expect(clearAllBtn).toBeTruthy();
    expect(clearAllBtn).toBeInTheDocument();
    expect(clearAllBtn).toHaveTextContent('Clear All');
    expect(clearAllBtn).toBeDisabled();
  });

  it('should return 2 of 4 Selected label button', () => {
    container = render(
      <MultiFilterList
        label="Test"
        selected={[{
          key: '3',
          value: '3',
          label: 'Three',
        }, {
          key: '4',
          value: '4',
          label: 'Four',
        }]}
        defaultSelectedText="None"
        onSelectChange={onSelectChange}
      >
        {data.map((d) => (
          <MultiFilterListItem
            key={d.key}
            item={d as any}
          >
            {d.label}
          </MultiFilterListItem>
        ))}
      </MultiFilterList>,
    );

    const dropDownButton = screen.getByRole('button', { name: /2 of 4 Selected/i });

    fireEvent.click(dropDownButton);

    expect(dropDownButton).toBeInTheDocument();
    expect(dropDownButton).toBeTruthy();
  });

  it('should hide dropdown content when clicking outside', () => {
    const dropDownButton = screen.getByRole('button', { name: /Three/i });
    fireEvent.click(dropDownButton);
    const checkItem1 = screen.getByRole('checkbox', { name: /two/i });
    fireEvent.mouseDown(document.body);

    expect(checkItem1).not.toBeVisible();
  });

  it('should show no matches when the item search is not found', async () => {
    const { queryByPlaceholderText } = container;
    const dropDownButton = screen.getByRole('button', { name: /Three/i });
    const searchInput = queryByPlaceholderText('Search here...');

    fireEvent.click(dropDownButton);
    userEvent.type(searchInput, 'abc');

    const noMatches = await screen.findByText('no matches');
    expect(noMatches).toBeTruthy();
  });

  it('should show item that match the characters in search input', async () => {
    const { queryByPlaceholderText } = container;
    const dropDownButton = screen.getByRole('button', { name: /Three/i });
    const searchInput = queryByPlaceholderText('Search here...');

    fireEvent.click(dropDownButton);
    userEvent.type(searchInput, 'Four');

    const renderItem = await screen.findByText('Four');
    expect(renderItem).toBeTruthy();
  });
});

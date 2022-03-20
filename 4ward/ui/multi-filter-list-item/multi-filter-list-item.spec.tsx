import React from 'react';
import {
  render, fireEvent, screen, cleanup,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MultiFilterList } from '@4ward/ui.multi-filter-list';
import { BasicMultiFilterListItem } from './multi-filter-list-item.composition';
import { MultiFilterListItem } from './multi-filter-list-item';

const data = [{
  key: '1',
  value: '1',
  label: 'Toy Story',
}, {
  key: '2',
  value: '2',
  label: 'Coco',
}, {
  key: '3',
  value: '3',
  label: 'Inside Out',
}, {
  key: '4',
  value: '4',
  label: 'Moana',
}];

let container;
const onSelectChange = jest.fn();

describe('Multi-filter initial test', () => {
  beforeEach(() => {
    container = render(
      <MultiFilterList
        label="Test"
        selected={[{
          key: '2',
          value: '2',
          label: 'Coco',
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

  it('should render the BasicMultiFilterListItem correctly', () => {
    const basic = render(<BasicMultiFilterListItem />);
    expect(basic).toBeTruthy();
  });

  it('should check selected item', () => {
    const { getByTestId } = container;
    const dropDownButton = getByTestId('button-dropdown');
    fireEvent.click(dropDownButton);
    const checkbox = screen.getByRole('checkbox', { name: /Toy Story/i });
    const checkboxItem = getByTestId('checkbox-Toy Story');
    userEvent.click(checkbox);

    expect(checkboxItem.checked).toEqual(true);
    expect(checkboxItem.value).toEqual('1');
    expect(checkboxItem).toBeTruthy();
    expect(checkbox).toBeChecked();
  });
});

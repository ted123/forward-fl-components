import React, {
  ReactNode,
  useEffect,
  useState,
  useCallback,
  ChangeEvent,
  Children,
  KeyboardEvent,
  useRef,
  useLayoutEffect,
} from 'react';

import {
  DropDownButtonStyle,
  Button,
  StyledItems,
  StyledLabel,
  DivWrapper,
  Footer,
  DropDownContent,
  ButtonDropDown,
  InputWrapper,
  Input,
  SvgSearch,
  DropdownBtnWrapper,
  SvgAngleDown,
} from './style';

const ALL = 'All';
const TEXT_SELECT_ALL = 'Select All';
const TEXT_CLEAR_ALL = 'Clear All';
const TEXT_SEARCH_DEFAULT = 'Search here...';
const TEXT_LABEL_DEFAULT = 'Label';

type Option = {
  key: string;
  value: string;
  label: string;
};

export type MultiFilterListProps = {
  /** Primary content */
  children: ReactNode;

  /** Dropdown selected items */
  selected: Array<Option>;

  /** Label prefixed to an option added by a user */
  label?: ReactNode | string;

  searchPlaceholder?: string;

  labelWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold' | 'bolder' | 'lighter' | 'normal';

  /** Button text */
  defaultSelectedText?: string;

  /** Disabled dropdown */
  disabled?: boolean;

  width?: number;

  buttonHeight?: number;

  widthContent?: number;

  /** Called when a user selects an item. Use this to update the options list */
  onSelectChange: (options: Option[]) => void;
};

// export const MultiFilterListContext = React.createContext({} as MutiContext);
export const MultiFilterListContext = React.createContext({
  selected: [],
  /* eslint-disable */
  onSelectItemChange: (e: ChangeEvent<HTMLInputElement>, item: Option): void => {},
});

function useOnClickOutside(ref) {
  const [isOutside, setIsOutside] = useState(false);

  useEffect(() => {
    /**
       * if clicked on outside of element
       */
    const handleClickOutside = (event) => {
      setIsOutside(ref.current && !ref.current.contains(event.target));
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return isOutside;
}

export function MultiFilterList({
  children,
  label = TEXT_LABEL_DEFAULT,
  labelWeight,
  defaultSelectedText,
  selected = [],
  searchPlaceholder = TEXT_SEARCH_DEFAULT,
  disabled = false,
  width = 280,
  buttonHeight = 30,
  widthContent = 280,
  onSelectChange,
}: MultiFilterListProps) {
  const dropContentRef = useRef(null);
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState('');
  const [selectedValues, setSelectedValues] = useState(selected);

  // custom hooks for listening outside content click
  const isClickOutside = useOnClickOutside(dropContentRef);

  const labelValue = useCallback((): string => {
    const childLength = Array.isArray(children) ? children.length : 0;
    const selectedValuesLength = Array.isArray(selectedValues) ? selectedValues.length : 0;

    if (selectedValuesLength === 0) {
      return defaultSelectedText || ALL;
    }

    if (selectedValuesLength === 1) {
      const [item] = selectedValues;

      return item.label;
    }

    if (selectedValuesLength === childLength) {
      return ALL;
    }

    return `${selectedValuesLength} of ${childLength} Selected`;
  }, [selectedValues, children]);

  // listen to selected values
  useEffect(() => {
    onSelectChange(selectedValues);
  }, [selectedValues]);

  useLayoutEffect(() => {
    if (isClickOutside) {
      setShow(false); // hide dropdown content
    }
  }, [isClickOutside]);

  const handleOnSelectItemChange = (e: ChangeEvent<HTMLInputElement>, item: Option) => {
    const currentSelectedValues = Array.isArray(selectedValues) ? selectedValues : [];
    const targetValue = e.target.value.toString().toLowerCase();

    if (!e.target.checked) {
      const handlerFilter = (option) => option.value.toString().toLowerCase() !== targetValue;
      const newSelectedValues = [...currentSelectedValues].filter(handlerFilter);

      setSelectedValues(newSelectedValues);
      return;
    }

    const handlerFindIndex = (option) => option.value.toString().toLowerCase() === targetValue;
    const selectedOptionIndex = [...currentSelectedValues].findIndex(handlerFindIndex);

    setSelectedValues(selectedOptionIndex === -1
      ? [...currentSelectedValues, item]
      : [...currentSelectedValues]);
  };

  const handleOnSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();

    setFilter(e.currentTarget.value);
  };

  const renderFilteredItems = (): ReactNode[] | ReactNode => {
    if (!filter || !filter.length) {
      return children;
    }

    const childrens = Children.map(children, (child: { type: any, props: any }) => {
      if (child.props.item.label.toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
        return child;
      }
      return null;
    });

    return childrens.length === 0 ? <DivWrapper>no matches</DivWrapper> : childrens;
  };

  const filteredItems = renderFilteredItems() as Array<ReactNode>;
  // selected is null then select all
  const checkedItems = filteredItems && Array.isArray(selectedValues) && selectedValues.length;
  const isSelectedAll = checkedItems === filteredItems.length;
  const isNotAllSelected = Array.isArray(selectedValues) && selectedValues.length === 0;

  const handleSelectAll = () => setSelectedValues((() => {
    const values = [];

    Children.forEach(filteredItems, (child: { type: any, props: any, item: any }) => {
      values.push(child.props.item);
    });

    return values;
  }));

  const provideConfigValue = {
    selected: selectedValues || [],
    onSelectItemChange: handleOnSelectItemChange,
  };

  return (
    <MultiFilterListContext.Provider value={provideConfigValue}>
      <DropDownButtonStyle width={width} ref={dropContentRef}>
        <StyledLabel labelWeight={labelWeight}>{ label }</StyledLabel>
        <DropdownBtnWrapper>
          <ButtonDropDown height={buttonHeight} data-testid="button-dropdown" disabled={disabled} onClick={() => setShow(!show)}>
            { labelValue() }
            <SvgAngleDown xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
            </SvgAngleDown>
          </ButtonDropDown>
        </DropdownBtnWrapper>
        <DropDownContent width={widthContent} show={show}>
          <InputWrapper>
            <SvgSearch xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
            </SvgSearch>
            <Input type="text" placeholder={searchPlaceholder} autoComplete="off" onKeyUp={handleOnSearch} />
          </InputWrapper>
          <StyledItems>
            { filteredItems }
          </StyledItems>
          <Footer>
            <Button disabled={isSelectedAll} onClick={handleSelectAll}>
              { TEXT_SELECT_ALL }
            </Button>
            <Button data-testid="clear-all" disabled={isNotAllSelected} onClick={() => setSelectedValues([])}>
              { TEXT_CLEAR_ALL }
            </Button>
          </Footer>
        </DropDownContent>
      </DropDownButtonStyle>
    </MultiFilterListContext.Provider>
  );
}

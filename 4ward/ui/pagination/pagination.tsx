import React, { useState, useEffect } from 'react';
import { StyledEllipsis, StyledPagesButton, StyledPrevArrow } from './style';

export type PaginationProps = {
  /**
   * a node to be rendered in the special component.
   */
  totalDataLength: number
  handlePagination: (page: number) => void
  maxPageLimit?: number
  disabled?: boolean
  currentPage: number
};

export function Pagination({
  totalDataLength, maxPageLimit = 5, handlePagination, disabled, currentPage,
}: PaginationProps) {
  const startAndEndWindowSize = 6;
  const [cPage, setcurrentPage] = useState(currentPage);
  const [pages, setPage] = useState([]);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(maxPageLimit);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const pageArray = [];
  useEffect(() => {
    if (totalDataLength <= 7) {
      setminPageNumberLimit(0);
      setmaxPageNumberLimit(totalDataLength);
      for (let i = 1; i <= totalDataLength; i += 1) {
        pageArray.push(i);
      }
    } else {
      for (let i = 1; i <= Math.ceil(totalDataLength / maxPageLimit); i += 1) {
        pageArray.push(i);
      }
    }
    setPage(pageArray);
    handlePagination(cPage);
  }, [cPage, setcurrentPage]);
  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
    if (Number(event.target.id) < maxPageLimit - Math.floor(maxPageLimit / 2)) {
      setminPageNumberLimit(0);
      setmaxPageNumberLimit(maxPageLimit);
    }
    if (Number(event.target.id) > pages.length - Math.floor(maxPageLimit / 2)) {
      setminPageNumberLimit(pages.length - maxPageLimit);
      setmaxPageNumberLimit(pages.length);
    }
    if (Number(event.target.id) >= maxPageLimit - 1) {
      setmaxPageNumberLimit(Number(event.target.id) + 2);
      setminPageNumberLimit(Number(event.target.id) - 3);
    }
    if (Number(event.target.id) > pages.length - maxPageLimit + 1
        && Number(event.target.id) > maxPageLimit) {
      setmaxPageNumberLimit(pages.length);
      setminPageNumberLimit(pages.length - maxPageLimit);
    }
  };
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <StyledPagesButton
          disabled={disabled}
          key={number}
          id={number}
          onClick={handleClick}
          aria-label={number}
          active={cPage === number}
          lastPage={maxPageNumberLimit === maxPageLimit
            ? maxPageLimit + 1 : startAndEndWindowSize + 1}
        >
          {number}
        </StyledPagesButton>
      );
    }
    return null;
  });
  const handleNextbtn = () => {
    setcurrentPage(cPage + 1);

    if (cPage > maxPageLimit - Math.floor(maxPageLimit / 2)) {
      setmaxPageNumberLimit(cPage + 3);
      setminPageNumberLimit(cPage - 2);
    }
    if (minPageNumberLimit === (pages.length - maxPageLimit)) {
      setmaxPageNumberLimit(pages.length);
      setminPageNumberLimit(pages.length - maxPageLimit);
    }
    if (cPage >= pages.length - maxPageLimit) {
      setmaxPageNumberLimit(pages.length);
      setminPageNumberLimit(pages.length - maxPageLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(cPage - 1);
    if (cPage <= pages.length - Math.floor(maxPageLimit / 2) && cPage > maxPageLimit) {
      setmaxPageNumberLimit(cPage + 1);
      setminPageNumberLimit(cPage - 1 - Math.floor(startAndEndWindowSize / 2));
    }
    if (cPage <= maxPageLimit) {
      setmaxPageNumberLimit(maxPageLimit);
      setminPageNumberLimit(maxPageLimit - maxPageLimit);
    }
  };
  const handleFirstPageDirect = () => {
    const pageJump = cPage - 1;
    setcurrentPage(cPage - pageJump);
    setmaxPageNumberLimit(maxPageLimit);
    setminPageNumberLimit(pageJump - pageJump);
  };
  const handleLastPageDirect = () => {
    const lastPage = pages.slice(-1).toString();
    setcurrentPage(parseInt(lastPage, 10));
    setmaxPageNumberLimit(pages.length);
    setminPageNumberLimit(pages.length - maxPageLimit);
  };
  const pageIncrementBtn = () => {
    const lastPage = pages.slice(-1).toString();
    if (pages.length > maxPageNumberLimit && cPage !== pages.length) {
      return (
        <StyledEllipsis>
          &hellip;
          <StyledPagesButton
            key={parseInt(lastPage, 10)}
            onClick={handleLastPageDirect}
            aria-label="Go to last page"
            disabled={disabled}
          >
            {lastPage}
          </StyledPagesButton>
        </StyledEllipsis>
      );
    }
    return null;
  };
  const pageDecrementBtn = () => {
    if (minPageNumberLimit >= 1) {
      const firstPage = pages.slice(0, 1).toString();
      return (
        <StyledEllipsis>
          <StyledPagesButton
            key={parseInt(firstPage, 10)}
            onClick={handleFirstPageDirect}
            aria-label="Go to first page"
            disabled={disabled}
          >
            {firstPage}
          </StyledPagesButton>
          &hellip;
        </StyledEllipsis>
      );
    }
    return null;
  };
  return (
    <div>
      <StyledPrevArrow onClick={handlePrevbtn} disabled={disabled || cPage === pages[0]} aria-label="previous">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 14 40">
          <path d="M1.004 21.429q0-.29.223-.513l10.402-10.402q.223-.223.513-.223t.513.223l1.116 1.116q.223.223.223.513t-.223.513l-8.772 8.772 8.772 8.772q.223.223.223.513t-.223.513l-1.116 1.116q-.223.223-.513.223t-.513-.223L1.227 21.94q-.223-.223-.223-.513z" />
        </svg>
      </StyledPrevArrow>
      {pageDecrementBtn()}
      {renderPageNumbers}
      {pageIncrementBtn()}
      <StyledPrevArrow onClick={handleNextbtn} disabled={disabled || cPage === pages[pages.length - 1]} aria-label="next">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 14 40">
          <path d="M.29 30.714q0-.29.223-.513l8.772-8.772-8.772-8.772q-.223-.223-.223-.513t.223-.513l1.116-1.116q.223-.223.513-.223t.513.223l10.402 10.402q.223.223.223.513t-.223.513L2.655 32.345q-.223.223-.513.223t-.513-.223L.513 31.229q-.223-.223-.223-.513z" />
        </svg>
      </StyledPrevArrow>
    </div>
  );
}

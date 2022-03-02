import React from 'react';
import { Loader } from './loader';

const showLoader = false;
export const BasicLoader = () => (
  <div>
    {showLoader && <Loader />}
  </div>
);

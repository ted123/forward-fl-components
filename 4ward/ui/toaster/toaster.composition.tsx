import React, { useState } from 'react';
import { Button } from './style';
import { Toaster } from './toaster';

export const BasicToaster = () => {
  const [toast, setToast] = useState([]);

  const infoData = {
    type: 'Info',
    title: 'Info!',
    description: 'This is a info toast component!',
  };

  const warningData = {
    type: 'Warning',
    title: 'Warning!',
    description: 'This is a warning toast component!',
  };

  const successData = {
    type: 'Success',
    title: 'Success!',
    description: 'This is a success toast component! In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
  };

  const errorData = {
    type: 'Error',
    title: 'Error!',
    description: 'This is a error toast component!',
  };

  function showToast(data) {
    setToast([...toast, data]);
  }

  return (
    <>
      <Toaster data={toast} />
      <div>
        <div>React Toaster Sample</div>
        <div>
          <Button onClick={() => showToast(successData)}>Success</Button>
          <Button onClick={() => showToast(warningData)}>Warning</Button>
          <Button onClick={() => showToast(infoData)}>Info</Button>
          <Button onClick={() => showToast(errorData)}>Error</Button>
        </div>
      </div>
    </>
  );
};

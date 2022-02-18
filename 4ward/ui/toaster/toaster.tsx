import React, { useEffect, useState } from 'react';
import {
  ToastNotifContainer, CloseBtn, Title, DescMsg, MainContainer, Img, ImgDiv, MsgContainer,
} from './style';
import success from './img/success.svg';
import info from './img/info.svg';
import warning from './img/warning.svg';
import error from './img/error.svg';

export type ToasterProps = {
  data?: Array<ToastProp>;
};

export type ToastProp = {
  id?: number,
  title?: string,
  description?: string;
  backgroundColor?: string;
  type?: string,
};

export function Toaster({ data }: ToasterProps) {
  let toastProps = null;

  const [list, setListData] = useState(data);

  useEffect(() => {
    setListData(data);
  }, [JSON.stringify(data)]);

  const toastData = (toasterData:ToastProp[]) => (toasterData || []).map((toast) => {
    switch (toast.type) {
      case 'success':
      case 'SUCCESS':
      case 'Success':
        toastProps = {
          title: toast.title,
          description: toast.description,
          backgroundColor: '#238749',
          type: toast.type,
          logo: success,
        };
        break;
      case 'error':
      case 'ERROR':
      case 'Error':
        toastProps = {
          title: toast.title,
          description: toast.description,
          backgroundColor: '#bf2e3a',
          type: toast.type,
          logo: error,
        };
        break;
      case 'info':
      case 'INFO':
      case 'Info':
        toastProps = {
          title: toast.title,
          description: toast.description,
          backgroundColor: '#7e4082',
          type: toast.type,
          logo: info,
        };
        break;
      case 'warning':
      case 'WARNING':
      case 'Warning':
        toastProps = {
          title: toast.title,
          description: toast.description,
          backgroundColor: '#de8d37',
          type: toast.type,
          logo: warning,
        };
        break;
      default:
        toastProps = [];
    }
    return toastProps;
  });

  const closeToast = (pos) => {
    list.splice(pos, 1);
    const toastListItem = list.filter((el) => !el);
    setListData(toastListItem);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (list && list.length) {
        closeToast(list[0]);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [list, closeToast]);

  return (
    <>
      <MainContainer>
        {
          toastData(list || []).map((toast, pos) => (
            <ToastNotifContainer color={toast.backgroundColor}>
              <ImgDiv>
                <Img src={toast.logo} alt="Logo" />
              </ImgDiv>
              <MsgContainer>
                <CloseBtn onClick={() => closeToast(pos)}> X </CloseBtn>
                <Title>{toast.title}</Title>
                <DescMsg>{toast.description}</DescMsg>
              </MsgContainer>
            </ToastNotifContainer>
          ))
        }
      </MainContainer>
    </>
  );
}

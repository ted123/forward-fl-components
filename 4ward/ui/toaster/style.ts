import styled from 'styled-components';

export const MainContainer = styled.div.attrs((props: { background: string}) => props)`
  font-family: 'Open Sans','Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  z-index: 10;
  right: 5px;
  background: ${(props) => props.color};
  float: right;
  display: grid;
  margin: 10px 10px 0px 0px;
  position: absolute;
`;

export const Button = styled.button`
  margin-right: 5px;
`;

export const ToastNotifContainer = styled.div`
  border-radius: 4px;
  box-shadow: 0 0 10px #999;
  color: #000;
  transition: .3s ease;
  margin-top: 10px;
  background-color: ${(props) => props.color};

  color: #fff;
  padding: 15px 15px 15px 15px;

  display: inline-flex;

  &:hover {
    box-shadow: 0 0 12px #fff;
    opacity: 0.9;
  }
`;

export const CloseBtn = styled.button`
  border: 0px;
  float: right;
  background: none;
  border: none;
  color: #fff;
  opacity: 0.8;
  cursor: point;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  margin-top: 0;
  width: 280px;
  height: 18px;
`;

export const DescMsg = styled.div`
  margin-top: 5px;
  text-align: left;
  width: 280px;
`;

export const ImgDiv = styled.div`
  padding: 5px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Img = styled.img`
  width: 25px;
`;

export const MsgContainer = styled.div`
  margin-left: 5px;
`;

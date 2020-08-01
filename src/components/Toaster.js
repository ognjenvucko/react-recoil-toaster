import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toasterState } from "../store";

const ToasterStyled = styled.div`
  position: fixed;
  border: 1px solid #aaa;
  border-radius: 5px;
  display: inline-block;
  width: 300px;
  left: 50%;
  padding: 10px;
  background-color: #fff;
  transform: translateX(-50%);
  transition: margin 0.2s ease;
  margin-top: ${props => (props.showToaster ? "0px" : "-200px")};
`;

export const Toaster = () => {
  const [state, setState] = useRecoilState(toasterState);
  useEffect(() => {
    if (state.showToaster) {
      setTimeout(() => {
        setState({ showToaster: false });
      }, 3000);
    }
  }, [state, setState]);
  return (
    <ToasterStyled showToaster={state.showToaster}>
      Just a simple toaster
    </ToasterStyled>
  );
};

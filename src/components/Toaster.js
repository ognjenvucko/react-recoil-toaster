import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toasterState } from "../store";
import { delay } from "../lib/delay";

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
  margin-top: ${({ showToaster }) => (showToaster ? "0px" : "-200px")};
`;

export const Toaster = () => {
  const [state, setState] = useRecoilState(toasterState);
  useEffect(() => {
    if (state.showToaster) {
      (async () => {
        await delay(3000);
        setState({ showToaster: false });
      })();
    }
  }, [state, setState]);
  return <ToasterStyled {...state}>Just a simple toaster</ToasterStyled>;
};

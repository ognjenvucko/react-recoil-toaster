import React from "react";
import { useSetRecoilState } from "recoil";
import { toasterState } from "../store";

export const Button = () => {
  const showToaster = useSetRecoilState(toasterState);
  return (
    <button
      onClick={() => {
        showToaster({ showToaster: true });
      }}
    >
      Show toaster
    </button>
  );
};

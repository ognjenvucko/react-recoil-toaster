import { atom } from "recoil";

export const toasterState = atom({
  key: "toasterState",
  default: { showToaster: false }
});

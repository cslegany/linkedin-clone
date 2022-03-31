import { atom } from "recoil";
import { ModalType_dropIn } from "../model/Model";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const modalTypeState = atom({
  key: "modalTypeState",
  default: ModalType_dropIn,
});

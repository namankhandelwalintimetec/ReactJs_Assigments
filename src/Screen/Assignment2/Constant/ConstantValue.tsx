import { CSSProperties } from "react";

export const Override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

export interface SpinnerProps {
  time: boolean;
};

export const ActiveState = "online-color";
export const OfflineState = "offline-color";
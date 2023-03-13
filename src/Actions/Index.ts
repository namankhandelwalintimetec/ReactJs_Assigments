export const Increase = (increament: String) => {
  return { type: "Increament", paylod: increament };
};
export const Decrease = (decreament: string) => {
  return { type: "Decreament", paylod: decreament };
};

export const Reset = () => {
  return { type: "Reset" };
};

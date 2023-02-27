import { useState, useEffect } from "react";

const useCheckStatus = (status) => {
  const [statusValue, setStatusValue] = useState(false);
  useEffect(() => {
    if (status === "offline") {
      setStatusValue(false);
    } else {
      setStatusValue(true);
    }
  }, [status]);
  return statusValue;
};

export default useCheckStatus;

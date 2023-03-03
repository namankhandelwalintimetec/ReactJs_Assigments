import { useState, useEffect } from "react";

const useCheckStatus = (friendCurrentState: string) => {
  const [friendStatusValue, setFriendStatusValue] = useState(false);
  useEffect(() => {
    if (friendCurrentState === "offline") {
      setFriendStatusValue(false);
    } else {
      setFriendStatusValue(true);
    }
  }, [friendCurrentState]);
  return friendStatusValue;
};

export default useCheckStatus;

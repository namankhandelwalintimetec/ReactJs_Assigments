import { useState } from "react";
import useCheckStatus from "./Hooks/useCheckStatus";
import Spinner from "./Components/Spinner";
import Footer from "../../Components/Footer";
import { Button, Div } from "./StyleComponent";

const Assignment2 = () => {
  const [friendState, setFriendState] = useState<string>("offline");
  const [loadingTime, setLoadingTime] = useState<boolean>(false);
  const status: Boolean = useCheckStatus(friendState);

  const statusChanger = () => {
    if (friendState === "offline") {
      setFriendState("online");
      setLoadingTime(true);
    } else {
      setFriendState("offline");
      setLoadingTime(true);
    }
  };

  setTimeout(() => {
    setLoadingTime(false);
  }, 2000);

  return (
    <>
      <Div>
        {(() => {
          if (loadingTime === false) {
            if (status)
              return (
                <>
                  <div>Friend is online</div>
                  <li className="online-color">Status</li>
                </>
              );
            else
              return (
                <>
                  <div>Friend is offline</div>
                  <li className="offline-color">Status</li>
                </>
              );
          }
        })()}
        <Spinner time={loadingTime} />
        <Button onClick={statusChanger}>
          <span className="material-symbols-outlined">change_circle</span>
        </Button>
      </Div>
      <Footer content="State checker" />
    </>
  );
};
export default Assignment2;

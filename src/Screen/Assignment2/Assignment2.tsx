import { useState } from "react";
import useCheckStatus from "./Hooks/useCheckStatus";
import Spinner from "./Components/Spinner";
import Footer from "../../Components/Footer";
import { Button, Div } from "./StyleComponents/Assignment3StyleComponent";
import { ActiveState, OfflineState } from "./Constant/ConstantValue";

const StatusChecker = () => {
  const [state, setState] = useState<string>("offline");
  const [loadingTime, setLoadingTime] = useState<boolean>(false);
  const status = useCheckStatus(state);

  const statusChanger = () => {
    if (state === "offline") {
      setState("online");
      setLoadingTime(true);
    } else {
      setState("offline");
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
                  <li className={ActiveState}>Status</li>
                </>
              );
            else
              return (
                <>
                  <div>Friend is offline</div>
                  <li className={OfflineState}>Status</li>
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
export default StatusChecker;

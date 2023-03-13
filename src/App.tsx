import { Provider } from "react-redux";
import CounterCard from "./Screens/CounterCard";
import store from "./Store";

const App = () => {
  return (
    <Provider store={store}>
      <CounterCard />
    </Provider>
  );
};

export default App;

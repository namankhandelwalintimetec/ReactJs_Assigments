import { Provider } from "react-redux";
import Index from "./Screens/Index";
import store from "./Store";

const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;

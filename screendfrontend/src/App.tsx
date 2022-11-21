import { Provider } from "react-redux";
import RoutesManager from "./setup/routes-manager";
import { store } from "./context-manager/store";

function App() {
  return (
    <Provider store={store}>
      <RoutesManager />
    </Provider>
  );
}

export default App;

import './App.css';
import NumberPage from "./pages/numberPage";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
  return (
      <Provider store={store}>
        <NumberPage/>
      </Provider>
  );
}

export default App;

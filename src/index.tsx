import ReactDOM from "react-dom/client";
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import TextEditor from "./components/text-editor";
import {Provider} from "react-redux";
import {store} from "./state";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
      <Provider store={store}>
          <div>
              <TextEditor />
          </div>
      </Provider>
  )
};

root.render(<App />);

import ReactDOM from "react-dom/client";
import { useState } from "react";
import CodeEditor from "./components/code-editor";
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Preview from "./components/preview";
import bundle from './bundler';

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
    const [input, setInput] = useState("");
    const [code, setCode] = useState("");

    const onCLick = async() => {
        const output = await bundle(input);
        setCode(output);
    }


  return <div>
      <CodeEditor
          initialValue="const a = 1;"
          onChange={(value) => setInput(value)}
      />
      <div>
          <button onClick={onCLick} className="btn btn-primary">Submit</button>
      </div>
      <Preview code={code} />
  </div>
};

root.render(<App />);

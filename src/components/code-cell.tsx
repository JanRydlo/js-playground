import { useState } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from '../bundler';

const CodeCell = () => {
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

export default CodeCell;

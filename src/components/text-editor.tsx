import React, {useEffect, useRef, useState} from "react";
import MDEditor from '@uiw/react-md-editor';
import './text-editor.css';

const TextEditor: React.FC = () => {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState('# Header');

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (divRef.current && event.target && divRef.current.contains(event.target as Element)) {
                return;
            }
            setEditing(false);
        };
        document.addEventListener('click', listener, {capture: true});
        return () => { document.removeEventListener('click', listener, {capture: true}); };
    }, []);

    if (editing) {
        return (
            <div className="text-editor" ref={divRef}>
                <MDEditor value={value} onChange={(v) => {setValue(v ||'')}} />
            </div>
        );
    }

    return <div className="text-editor card" onClick={() => setEditing(true)}>
        <div className="card-content">
            <MDEditor.Markdown source={value}></MDEditor.Markdown>
        </div>
    </div>
}

export default TextEditor;
import React, {useEffect, useRef, useState} from "react";
import MDEditor from '@uiw/react-md-editor';
import './text-editor.css';
import {Cell} from "../state";
import {useActions} from "../hooks/use-actions";

interface TextEditorProps {
    cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
    const [editing, setEditing] = useState(false);

    const { updateCell } = useActions();

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
                <MDEditor value={cell.content} onChange={(v) => updateCell(cell.id, v || '')} />
            </div>
        );
    }

    return <div className="text-editor card" onClick={() => setEditing(true)}>
        <div className="card-content">
            <MDEditor.Markdown source={cell.content || 'Click to edit'}></MDEditor.Markdown>
        </div>
    </div>
}

export default TextEditor;
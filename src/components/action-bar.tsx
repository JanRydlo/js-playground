import {useActions} from "../hooks/use-actions";
import ActionButton from "./action-button";
import React from "react";
import './action-bar.css';


interface ActionBarProps {
    id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
    const { moveCell, deleteCell } = useActions();

    return (
        <div className="action-bar">
            <ActionButton icon="arrow-up" action={() => moveCell(id, 'up')} />
            <ActionButton icon="arrow-down" action={() => moveCell(id, 'down')} />
            <ActionButton icon="times" action={() => deleteCell(id)} />
        </div>
    );
}

export default ActionBar;
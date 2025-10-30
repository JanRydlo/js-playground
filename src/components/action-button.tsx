import React from "react";

interface ActionButtonProps {
    icon: string;
    action: () => {}
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, action }) => {
    return (
        <button
            className="button is-primary is-small"
            onClick={action}
        >
            <span className="icon">
                <i className={`fa fa-${icon}`}></i>
            </span>
        </button>
    )
}

export default ActionButton;
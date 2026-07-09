import React from "react";
import { TodoIcon } from "../TodoIcon";

function DeleteIcon ({onDelete, completed}) {
    return (
        <TodoIcon
        type = 'delete'
        color = {completed ? 'red' : 'red'}
        onDelete={onDelete}
        />
    );
}

export {DeleteIcon}

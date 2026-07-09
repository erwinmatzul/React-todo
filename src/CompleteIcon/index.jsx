
 import React from "react";
import { TodoIcon } from "../TodoIcon";

function CompleteIcon ({onCompleted, completed}) {
    return (
        <TodoIcon
        type = 'check'
        color = {completed ? 'green': 'gray'}
        onCompleted={onCompleted}
        />
    )
}

export {CompleteIcon}
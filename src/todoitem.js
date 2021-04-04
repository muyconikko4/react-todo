import React from 'react'

const TodoItem = props => {
    const {
        index,
        value,
        delToDo,
        clickEdit
    } = props

    return (
                <div key={index} className="row-wrapper">
                    <span>{value}</span>
                    <button onClick={() => clickEdit(index)}>Edit</button>
                    <button onClick={() => delToDo(index)}>Delete</button>
                </div>
    )
}

export default TodoItem
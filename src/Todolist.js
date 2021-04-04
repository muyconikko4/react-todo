import React, { useState } from 'react'

import TodoItem from './todoitem'

const Todolist = () => {
    const [state, setState] = useState({
        todo: '',
        isUpdate: false,
        todolist: []    
    })

    const [edit, setEdit] = useState({
        editTodo: '',
        index: ''
    })

    const [isUpdate, setIsUpdate] = useState(false)

    const { todo, todolist } = state
    const { editTodo, editIndex } = edit

    const handleOnChangeEdit = (e) => {
        const { name, value } = e.target

        setEdit({...edit, [name]: value})
    }

    const clickEdit = (index) => {
        setIsUpdate(true)

        setEdit({ ...edit, editIndex: index})
    }

    const clickEditFalse = () => {
        setIsUpdate(false)

    }

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setState({...state, [name]: value})
    }
    
    const cr8ToDo = () => {
        const list = todolist
        list.push(todo)

        setState({todo: '', todolist: list})
    }

    const delToDo = (index) => {
        const list = todolist
        list.splice(index, 1)

        setState({todo: '', todolist: list})
    }

    const updateTodo = (index) => {
        const list = todolist
        list[index] = editTodo

        setState({ ...state, todolist: list})
    }

    return (
        <div className="tdl-main">
                <div className="form-wrapper">
                <input type="text"
                    name="todo"
                 placeholder="Text!"
                 value-={todo} 
                 onChange={handleOnChange}
                    />
                <button onClick={cr8ToDo}>Add item</button>
                </div>
            <div className="table-main">
                <div className="header-wrapper">
                    <span>To do</span>
                    <span>Action</span>
                </div>
                {
                    todolist.length ?
                        todolist.map((value, index) => (
                        <TodoItem 
                            index={index}
                            value={value}
                            delToDo={delToDo}
                            clickEdit={clickEdit}
                        />
                                
                        
                        )) : <span>No Record</span>
                }
                    {
                    isUpdate ?
                        <div className="form-wrapper">
                        <input type="text"
                        name="editTodo"
                         placeholder="Update To Do"
                        value-={editTodo} 
                        onChange={handleOnChangeEdit}
                        />
                        <button onClick={() => updateTodo(editIndex)}>Update</button>
                        <button onClick={clickEditFalse}>Cancel</button>
                       </div> : ''
                    }   
                        
            </div>
        </div>
    )

}

export default Todolist
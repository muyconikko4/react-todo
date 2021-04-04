import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()

    const handleOC = () => {
        history.push('./Todolist')
    }


    return (
        <div className="home-main"> 
            <h1>To do List</h1>
            <button onClick={handleOC}>Start</button>
        </div>
    )

}

export default Home
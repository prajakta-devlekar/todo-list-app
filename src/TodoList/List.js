import React from 'react'
import './ToDo.css'

const List =(props)=> {
 
        return (
            <>
                <div className='list'>
                    <button className='listbutton' onClick={()=>{props.onSelect(props.id)}}>-</button>
                    <li className='listitem'>{props.text}</li>
                </div>
            </>
        )
    }

export default List

import React, {useState} from 'react'
import List from './List'
import './ToDo.css'

const TodoList=()=> {
    const [inputlist, setInputlist] = useState('')
    const [items, setItems] = useState([])
    const itemEvent=(event)=>{
        setInputlist(event.target.value)
    }
    const listItems=()=>{
      
        setItems((prevItem)=>{
            return [...prevItem,inputlist] });
        setInputlist("")
    };
    const deleteItems=(id)=>{
        setItems((prevItem)=>{
            return prevItem.filter((arrayElement,index)=>{
                return index!==id; 
            })
        })
    }
        return (
            <div className='maindiv'>
                <div className='centerdiv'>
                    <h1>To do List</h1> <br/>
                    <input className='additem' type='text' placeholder='Add item'  value={inputlist} onChange={itemEvent} ></input>
                    <button className='addbutton' onClick={listItems}>+</button><br/>
                    <ol> {items.map((itemvalue,index)=>{
                        return <List key={index} id ={index} text={itemvalue} onSelect={deleteItems}></List>
                            })}
                    </ol>
                </div>
            </div>
        )
    }

export default TodoList

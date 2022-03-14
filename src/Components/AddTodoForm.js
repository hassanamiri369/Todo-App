import React , {useState} from 'react'
import nextId from "react-id-generator";

const AddTodoForm = ({dispatch}) => {
    const [text , setText] = useState()

    // handle form 
    const handleForm = (e)=>{
        e.preventDefault()
        const dataInput = {id : nextId() , text : text , complete : false}
        dispatch({type : "addTodo" , payload : dataInput})
        setText("")
    }
    return (
        <div>
            <div className="addTodo">
                <form onSubmit={handleForm}>
                    <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
                    <button type="submit">add</button>
                </form>
            </div>
        </div>
    )
}

export default AddTodoForm
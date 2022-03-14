import React , {useState , useReducer} from "react"
import AddTodoForm from "./Components/AddTodoForm"


// const reducer 
const reducer = (state , action)=> {
  switch(action.type){
    case "addTodo" :
      return {...state , todos : [...state.todos , action.payload]}
    
    
    case "removeTodo":
      return {...state , todos : action.payload}

    default :
      return state
  }
}


// const initState 

const initState = {
  todos :[
    {id : 1 , text : "python is a backend language" , complete : false},
    {id : 2 , text : "javascript is a frontEnd language" , complete : false},
    {id : 3 , text : "React is a frontend library" , complete : false}, 
    
    
] ,
}
function App() {

  const [state , dispatch] = useReducer(reducer , initState)


  // remove todo 
  const RemoveTodo = (todo) => {
    const newTodoAfterRemove = state.todos.filter(item =>  item.id !== todo.id)
    dispatch({type : "removeTodo" , payload : newTodoAfterRemove})
  }


  return (
    <>
      <div>
        <div className="addTodo">
          <AddTodoForm dispatch = {dispatch}/>
        </div>

        
        <div className="showTodo">
          <div>
            {state.todos.map((item , index)=> (
              <div key={index}>
                <span><span>{index} : {" "}</span>
                </span>{item.text}<span>
                <input type="checkbox"/></span>
                <span><button onClick={() => RemoveTodo(item)}>remove</button></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    </>
  );
}

export default App;

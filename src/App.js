import React , {useState , useReducer} from "react"
import AddTodoForm from "./Components/AddTodoForm"

// const reducer 
const reducer = (state , action)=> {
  switch(action.type){
    case "addTodo" :
      return {...state , todos : [...state.todos , action.payload]}

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
    {id : 4 , text : "nodejs is a backend language" , complete : false},
    
] ,
}
function App() {

  const [state , dispatch] = useReducer(reducer , initState)
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
                <span><span>{index} : {" "}</span>{item.text}</span><span><input type="checkbox"/></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    </>
  );
}

export default App;

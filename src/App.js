import React , {useState , useReducer} from "react"

// const reducer 
const reducer = (state , action)=> {
  switch(action.type){

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
   
    </>
  );
}

export default App;

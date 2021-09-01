import react, { useReducer } from 'react';

const buttonReducer = (state, action) =>{

    switch(action){
        case "INCREMENT" :
            return {count : state.count+1, showText : state.showText};
        case "SHOWTEXTTOGGLE" :
            return {count : state.count, showText: !state.showText};
            case "RESET" :
                return {count : 0, showText : false};
            default :
            return state;
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(buttonReducer, {count : 0, showText : false});

    return (
   <div className = "useReducerDiv">
             <h1> {state.count}</h1>
             <button onClick = {() =>{
                 dispatch("INCREMENT");
                 dispatch("SHOWTEXTTOGGLE");
             }}> Click Me</button>
            <button onClick = {() => {
                dispatch("RESET");
            }}>reset</button>
            {state.showText && <h1> random text</h1>}
            
   </div>
    );
}

export default UseReducer;
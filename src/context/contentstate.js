import React  from "react";
import context from './Context.js';

const Notecontest = (props) => {
    const state = {
        "Name" : "zoheb",
        "age": "22"
    }
     return (
        <context.Provider value ={state}>
        
        {props.children}
        </context.Provider>
     )
}

 export default Notecontest;
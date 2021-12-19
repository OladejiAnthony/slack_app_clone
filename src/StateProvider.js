import React, { createContext, useContext, useReducer} from "react";

//we use React Context API to access user from anywhere in our App without going through steps.
//StateProvider is our DataLayer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


export const useStateValue = () => useContext(StateContext)











//8hrs,33mins


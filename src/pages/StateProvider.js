import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children}) => (
 
);

export const useStateValue = () => useContext(StateContext);


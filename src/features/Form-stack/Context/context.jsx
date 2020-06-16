import React, { createContext, useReducer } from 'react';
import reducer from '../Reducers';
import init from '../Global-State/data';
const FormContext = createContext();
// const [state, dispatch] = useReducer(reducer, initialState, init)
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, init);
    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    );
};

export { ContextProvider, FormContext };

import React,{createContext} from "react";


export const MoqupsContext=createContext(null);

const MoqupsContextProvider=(props)=>{
      const getColor=(curr)=>{
        if(curr==='submitted'){
            return 'submitted'
        }

       
    }
    const contextValue={getColor}
    return(
        <MoqupsContext.Provider value={contextValue}>

            {props.children}
        </MoqupsContext.Provider>
    )
}

export default MoqupsContextProvider;
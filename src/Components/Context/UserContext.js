import { createContext, useState } from "react";

export const UserContext=createContext()




export function UserContextProvider(props){



   const [userToken, setUserToken]= useState(null)

    return<UserContext.Provider value={{userToken, setUserToken}}>

{props.children}

    </UserContext.Provider>
}
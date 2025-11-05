import {createContext, useState, useEffect } from "react"

export const RecruiterContext = createContext();

export const AuthProvider = ({children }) =>{


    const [isRecruiterAuthenticated, setIsRecruiterAuthenticated] = useState(false);
    const [recruiterData, setRecruiterData] = useState(null);

    useEffect(() =>{
        const storedata = localStorage.getItem()

    }, []);

    

    return (
       < RecruiterContext.Provider value ={{}}>
        {children}
       </RecruiterContext.Provider>
    )

}
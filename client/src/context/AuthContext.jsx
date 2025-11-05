import { createContext, useState} from "react";

export const AuthContext =  createContext();

export const AuthProvide = ( {children}) =>{
     const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("isAuthenticated") === "true"
  );

    // useEffect(()=>{

    //     const authstatus = localStorage.getItem("isAuthenticated") === "true";
    //     setIsAuthenticated(authstatus)

    // },[])

    const login = (email, password) =>{
        if (email === "admin@example.com"  && password ==="password123"){
            setIsAuthenticated(true);
            localStorage.setItem("isAuthenticated", "true")
            return true;
        }
        return false;

    }

    const logout = ( )=>{
       setIsAuthenticated(false);
       localStorage.removeItem("isAuthenticated")

    }
    return(
        <AuthContext.Provider value = {{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

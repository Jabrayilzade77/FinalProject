import { jwtDecode } from "jwt-decode"
import Cookies from "js-cookie"
import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

function AuthProvider({children}) {

    const [token, settoken] = useState(Cookies.get("token") ? Cookies.get("token"): null)
    const [decoded, setdecoded] = useState(Cookies.get("token") ? jwtDecode(Cookies.get("token")) :null)

    const navigate = useNavigate()
 
    function logOut() {
        settoken(null)
        setdecoded(null)

        Cookies.remove("token")

        navigate("/")
        
    }
    
  return (
    <AuthContext.Provider value={{token,decoded,setdecoded,settoken,logOut}}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { Navigate, Outlet } from "react-router-dom"

function PrivateRoute({role}) {

    const {token,decoded} = useContext(AuthContext)
   return token && role.includes(decoded.role) ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} />
  )

}

export default PrivateRoute
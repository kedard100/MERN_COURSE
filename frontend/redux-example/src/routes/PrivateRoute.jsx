import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children }) {
  
  const isLoggedin = useSelector((state) => state.user.isLoggedin);
  console.log("islogin in private route",isLoggedin)
  //const isLoggedIn=false
  return isLoggedin ? children: <Navigate to="/" /> 
}

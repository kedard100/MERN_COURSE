import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({ children }) {
  const isLoggedin = useSelector((state) => state.user.isLoggedin);
  console.log("isLogedIn",isLoggedin)
 // const isLoggedIn=false
 
  return isLoggedin ? <Navigate to="/dashboard" /> : children;
}

import { useDispatch, useSelector } from 'react-redux';
import { setUser, logoutUser } from '../redux/actions/userActions';

function UserProfile() {
  const dispatch = useDispatch();
  const { isLoggedin, user } = useSelector((state) => state.user.isLoggedin);
console.log("isLoggedIn",isLoggedin)

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      {isLoggedin ? (
        <>
          <p>👤 Welcome, {user.name} ({user.email})</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : <></>}
    </div>
  );
}

export default UserProfile

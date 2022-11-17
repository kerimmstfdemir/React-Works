import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const userAuthenticated = true;
  return (
    <div>
      {userAuthenticated ? <Outlet /> : <Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRouter
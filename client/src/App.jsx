// client/src/App.js
import React, { Suspense,useContext  } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './index.css';
import { AuthContext } from './context/AuthContext';

import protectedRoutes from './routes/protectedRoutes.jsx';
import publicRoutes from './routes/publicRoutes.jsx';
import LoginPage from './pages/Loginpage.jsx';

const NotFoundPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 text-xl font-semibold">
    404 - Page Not Found
  </div>
);

function App() {

  const { isAuthenticated, login, logout } = useContext(AuthContext);

  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   () => localStorage.getItem('isAuthenticated') === 'true'
  // );

  // useEffect(() => {
  //   const authStatus = localStorage.getItem('isAuthenticated') === 'true';
  //   setIsAuthenticated(authStatus);
  // }, []);

  // const dummyLogin = (email, password) => {
  //   if (email === 'admin@example.com' && password === 'password123') {
  //     setIsAuthenticated(true);
  //     localStorage.setItem('isAuthenticated', 'true');
  //     return true;
  //   }
  //   return false;
  // };

  // const dummyLogout = () => {
  //   setIsAuthenticated(false);
  //   localStorage.removeItem('isAuthenticated');
  // };

  return (
    <Router>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 text-lg">
          Loading...
        </div>
      }>
        <Routes>
          <Route path="/login" element={<LoginPage dummyLogin={login} />} />

          {publicRoutes
            .filter(route => route.path !== '/login')
            .map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}

          {isAuthenticated ? (
            <Route path="/" element={<MainLayout dummyLogout={logout} />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              {protectedRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
              <Route path="*" element={<Navigate to="dashboard" replace />} />
            </Route>
          ) : (
            <Route path="/*" element={<Navigate to="/login" replace />} />
          )}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

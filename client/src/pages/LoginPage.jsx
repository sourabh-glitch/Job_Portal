import React, { useState, useContext  } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import {AuthContext} from "../context/AuthContext"



function LoginPage() { // Receive dummyLogin as prop
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/dashboard'); // Navigate to dashboard on success
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="email" required className="relative block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" required className="relative block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">Sign in</button>
        </form>
        <div className="text-center text-sm">
          <p className="text-gray-600">Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
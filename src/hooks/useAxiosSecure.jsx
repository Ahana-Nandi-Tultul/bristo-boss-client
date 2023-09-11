import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useAxiosSecure = () => {
  const { logout } = useAuth() // Replace with your actual AuthContext
  const navigate = useNavigate()

  // Create an Axios instance with a base URL
  const instance = axios.create({
    baseURL: `http://localhost:3000`,
  });

  useEffect(() => {
    // Interceptor to add authorization header
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('access-token-Bristo');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  // Interceptor to handle 401 or 403 errors
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        // Logout the user
        logout();

        // Redirect to the login page
        navigate('/login')
      }

      return Promise.reject(error);
    }
  );
  }, [logout, navigate, instance])
  

  return [instance];
};

export default useAxiosSecure;
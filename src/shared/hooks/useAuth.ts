import { useState, useEffect } from 'react';
import { User, getCurrentUser, addAuthListener } from '../api/authApi';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getCurrentUser());
    
    // Listen for auth state changes
    const unsubscribe = addAuthListener(() => {
      setUser(getCurrentUser());
    });
    
    return unsubscribe;
  }, []);

  return { user };
};

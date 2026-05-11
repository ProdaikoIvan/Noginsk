type LoginPayload = {
  username: string;
  password: string;
};

type RegisterPayload = {
  username: string;
  email?: string;
  password: string;
};

export type User = {
  username: string;
  email?: string;
};

// Fake user storage (in real app this would be handled by backend)
let currentUser: User | null = null;

// Event listeners for auth state changes
const authListeners: (() => void)[] = [];

const notifyAuthChange = () => {
  authListeners.forEach(listener => listener());
};

export const addAuthListener = (listener: () => void) => {
  authListeners.push(listener);
  return () => {
    const index = authListeners.indexOf(listener);
    if (index > -1) {
      authListeners.splice(index, 1);
    }
  };
};

export const login = async (payload: LoginPayload): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Fake authentication - accept any non-empty username/password
  if (!payload.username || !payload.password) {
    throw new Error("Username and password are required");
  }
  
  // Create fake user
  currentUser = {
    username: payload.username,
    email: `${payload.username.toLowerCase()}@example.com`
  };
  
  // Store in localStorage for persistence
  localStorage.setItem('user', JSON.stringify(currentUser));
  
  // Notify listeners of auth state change
  notifyAuthChange();
  
  return currentUser;
};

export const register = async (payload: RegisterPayload): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Fake registration - accept any non-empty data
  if (!payload.username || !payload.password || !payload.email) {
    throw new Error("All fields are required");
  }
  
  // Create fake user
  currentUser = {
    username: payload.username,
    email: payload.email
  };
  
  // Store in localStorage for persistence
  localStorage.setItem('user', JSON.stringify(currentUser));
  
  // Notify listeners of auth state change
  notifyAuthChange();
  
  return currentUser;
};

export const logout = async (): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  currentUser = null;
  localStorage.removeItem('user');
  
  // Notify listeners of auth state change
  notifyAuthChange();
};

export const getCurrentUser = (): User | null => {
  if (currentUser) {
    return currentUser;
  }
  
  // Check localStorage on app load
  const stored = localStorage.getItem('user');
  if (stored) {
    try {
      currentUser = JSON.parse(stored);
      return currentUser;
    } catch {
      localStorage.removeItem('user');
    }
  }
  
  return null;
};

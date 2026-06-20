import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  email: string;
  isSubscriber: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => Promise<void>;
  signup: (email: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock persistence
  useEffect(() => {
    const savedUser = localStorage.getItem('forge_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // For demo: any email ending in @subscriber.com is a subscriber
    const newUser = { 
      email, 
      isSubscriber: email.endsWith('@subscriber.com') 
    };
    
    setUser(newUser);
    localStorage.setItem('forge_user', JSON.stringify(newUser));
    setIsLoading(false);
  };

  const signup = async (email: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newUser = { email, isSubscriber: false };
    setUser(newUser);
    localStorage.setItem('forge_user', JSON.stringify(newUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('forge_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

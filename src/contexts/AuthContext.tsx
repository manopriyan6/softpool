
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";

type User = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real app, this would be an API call to authenticate the user
      
      // For demo purposes, we'll simulate a login with a mock user
      if (email === "admin@example.com" && password === "password") {
        const adminUser = {
          id: "admin-1",
          name: "Admin User",
          email: "admin@example.com",
          isAdmin: true,
        };
        setUser(adminUser);
        localStorage.setItem("user", JSON.stringify(adminUser));
        toast.success("Logged in successfully as admin");
      } else if (email === "user@example.com" && password === "password") {
        const regularUser = {
          id: "user-1",
          name: "Regular User",
          email: "user@example.com",
          isAdmin: false,
        };
        setUser(regularUser);
        localStorage.setItem("user", JSON.stringify(regularUser));
        toast.success("Logged in successfully");
      } else {
        // For demo purposes, create a user account if credentials don't match demo accounts
        const newUser = {
          id: `user-${Date.now()}`,
          name: email.split('@')[0],
          email,
          isAdmin: false,
        };
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        toast.success("Logged in successfully");
      }
    } catch (error) {
      toast.error("Failed to log in");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // In a real app, this would integrate with Google OAuth
      
      // For demo purposes, we'll simulate a Google login
      const googleUser = {
        id: `google-user-${Date.now()}`,
        name: "Google User",
        email: "google.user@example.com",
        isAdmin: false,
      };
      setUser(googleUser);
      localStorage.setItem("user", JSON.stringify(googleUser));
      toast.success("Logged in with Google");
    } catch (error) {
      toast.error("Failed to log in with Google");
      console.error("Google login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real app, this would be an API call to register the user
      
      // For demo purposes, we'll simulate registration
      const newUser = {
        id: `user-${Date.now()}`,
        name,
        email,
        isAdmin: false,
      };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      toast.success("Registered successfully");
    } catch (error) {
      toast.error("Failed to register");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.info("Logged out");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        loginWithGoogle,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

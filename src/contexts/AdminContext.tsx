import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAdmin: boolean;
  isEditMode: boolean;
  setIsEditMode: (mode: boolean) => void;
  content: Record<string, any>;
  updateContent: (id: string, value: any) => void;
  login: () => void;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState<Record<string, any>>({});

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminStatus);
    
    // Load saved content from localStorage
    const savedContent = localStorage.getItem('tselec_content');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (e) {
        console.error('Failed to parse saved content', e);
      }
    }
  }, []);

  const updateContent = (id: string, value: any) => {
    setContent(prev => {
      const newContent = { ...prev, [id]: value };
      localStorage.setItem('tselec_content', JSON.stringify(newContent));
      return newContent;
    });
  };

  const login = () => {
    localStorage.setItem('isAdmin', 'true');
    setIsAdmin(true);
  };

  const logout = () => {
    localStorage.removeItem('isAdmin');
    setIsAdmin(false);
    setIsEditMode(false);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, isEditMode, setIsEditMode, content, updateContent, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}

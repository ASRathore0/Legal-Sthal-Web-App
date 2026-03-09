import React, { createContext, useContext, useState, useEffect } from 'react';
import { getGlobalContent } from '../services/cmsService';
import { GlobalContent } from '../types';

interface CMSContextType {
  globalContent: GlobalContent | null;
  loading: boolean;
  error: string | null;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [globalContent, setGlobalContent] = useState<GlobalContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await getGlobalContent();
        setGlobalContent(content);
      } catch (err: any) {
        console.warn('API lookup failed, using default fallback content.');     
        setError(err.message || 'Failed to load global content');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return (
    <CMSContext.Provider value={{ globalContent, loading, error }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};

import axios from 'axios';
import { GlobalContent, CustomPageListItem, CustomPageData } from '../types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API_BASE_URL = import.meta.env.DEV 
  ? '/api' 
  : `${BASE_URL || ''}/api`;

const checkEnv = () => {
  if (!BASE_URL) {
    throw new Error('VITE_API_BASE_URL is missing. Please update your .env file with the correct base URL to see dynamic data.');
  }
};

export const getStorageUrl = (path: string | undefined): string | undefined => {
  if (!path) return undefined;
  if (path.startsWith('http')) return path;
  // If path starts with /storage, prepend base url. 
  // If path doesn't start with /, add it.
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (import.meta.env.DEV) {
      // In dev, we can use the proxy if we set it up for storage too, OR just point to production URL directly since it's just GET requests
      // Vite proxy is for /api, for storage images we can use direct URL to avoid CORS issues if proxy isn't set for /storage
      return `${BASE_URL || ''}${cleanPath}`;
  }
  return `${BASE_URL || ''}${cleanPath}`;
};

const cmsApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/json',
  },
});

export const getGlobalContent = async (): Promise<GlobalContent | null> => {
  checkEnv();
  try {
    const response = await cmsApi.get('/website-content');
    if (response.data.status === 'success') {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching global content:', error);
    return null;
  }
};

export const getCustomPageList = async (): Promise<CustomPageListItem[]> => {
  checkEnv();
  try {
    const response = await cmsApi.get('/custom-pages');
    if (response.data.status === 'success') {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching custom pages:', error);
    return [];
  }
};

export const getCustomPageData = async (slug: string): Promise<CustomPageData | null> => {
  checkEnv();
  try {
    const response = await cmsApi.get(`/custom-pages/slug/${slug}`);
    if (response.data.status === 'success') {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching page data for slug: ${slug}`, error);
    return null;
  }
};

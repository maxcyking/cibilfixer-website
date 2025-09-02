import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from './firebase';

export interface ApkData {
  id: string;
  link: string;
  os: string;
  type: string;
  version?: string;
  size?: string;
  lastUpdated?: string;
  requirements?: string;
}

export async function getApkByTypeAndOS(type: string, os: string): Promise<ApkData | null> {
  // Only run on client side
  if (typeof window === 'undefined' || !db) {
    console.log('Firebase not available - window or db not found');
    return null;
  }
  
  try {
    console.log(`Fetching APK with type: ${type}, os: ${os}`);
    const apksRef = collection(db, 'apks');
    
    // Try without orderBy first in case there's no index
    const q = query(
      apksRef,
      where('type', '==', type),
      where('os', '==', os),
      limit(1)
    );
    
    console.log('Executing Firebase query...');
    const querySnapshot = await getDocs(q);
    console.log('Query completed, docs found:', querySnapshot.size);
    
    if (querySnapshot.empty) {
      console.log('No documents found matching criteria');
      return null;
    }
    
    const doc = querySnapshot.docs[0];
    const data = {
      id: doc.id,
      ...doc.data()
    } as ApkData;
    
    console.log('Found APK data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching APK data:', error);
    return null;
  }
}

export async function getAllPartnerApks(): Promise<ApkData[]> {
  // Only run on client side
  if (typeof window === 'undefined' || !db) {
    return [];
  }
  
  try {
    const apksRef = collection(db, 'apks');
    const q = query(
      apksRef,
      where('type', '==', 'partner'),
      orderBy('os', 'asc')
    );
    
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as ApkData[];
  } catch (error) {
    console.error('Error fetching all partner APKs:', error);
    return [];
  }
}

export function detectUserOS(): string {
  if (typeof window === 'undefined') return 'unknown';
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('android')) return 'android';
  if (userAgent.includes('iphone') || userAgent.includes('ipad')) return 'ios';
  if (userAgent.includes('windows')) return 'windows';
  if (userAgent.includes('mac')) return 'macos';
  if (userAgent.includes('linux')) return 'linux';
  
  return 'unknown';
}
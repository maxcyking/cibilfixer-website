import { PlatformMetadata } from './platform-utils';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export interface FormAnalytics {
  sessionId: string;
  formType: 'raise-request' | 'become-partner' | 'contact';
  step: number;
  action: 'start' | 'next' | 'prev' | 'submit' | 'abandon' | 'error';
  timestamp: string;
  platformMetadata: PlatformMetadata;
  formData?: any;
  errorMessage?: string;
  timeSpent?: number;
}

export class FormTracker {
  private sessionId: string;
  private formType: string;
  private startTime: number;
  private stepStartTime: number;
  private platformMetadata: PlatformMetadata | null = null;

  constructor(formType: string, platformMetadata?: PlatformMetadata) {
    this.sessionId = this.generateSessionId();
    this.formType = formType;
    this.startTime = Date.now();
    this.stepStartTime = Date.now();
    this.platformMetadata = platformMetadata || null;
  }

  private generateSessionId(): string {
    return 'form_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  async trackEvent(step: number, action: string, additionalData?: any) {
    try {
      const analytics: FormAnalytics = {
        sessionId: this.sessionId,
        formType: this.formType as any,
        step,
        action: action as any,
        timestamp: new Date().toISOString(),
        platformMetadata: this.platformMetadata!,
        timeSpent: Date.now() - this.stepStartTime,
        ...additionalData
      };

      // Log to console in development
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('Form Analytics:', analytics);
      // }

      // Save to Firestore (optional - you can enable this if needed)
      // await addDoc(collection(db, 'formAnalytics'), analytics);

      // Reset step timer for next action
      this.stepStartTime = Date.now();
    } catch (error) {
      console.warn('Failed to track form analytics:', error);
    }
  }

  trackFormStart(step: number = 1) {
    this.trackEvent(step, 'start');
  }

  trackStepNext(fromStep: number, toStep: number) {
    this.trackEvent(fromStep, 'next', { toStep });
  }

  trackStepPrev(fromStep: number, toStep: number) {
    this.trackEvent(fromStep, 'prev', { toStep });
  }

  trackFormSubmit(step: number, formData?: any) {
    const totalTime = Date.now() - this.startTime;
    this.trackEvent(step, 'submit', { 
      formData: formData ? Object.keys(formData) : undefined, // Only track field names, not values
      totalFormTime: totalTime 
    });
  }

  trackFormAbandon(step: number) {
    const totalTime = Date.now() - this.startTime;
    this.trackEvent(step, 'abandon', { totalFormTime: totalTime });
  }

  trackError(step: number, errorMessage: string) {
    this.trackEvent(step, 'error', { errorMessage });
  }
}

// Utility functions for common tracking scenarios
export function trackPageView(page: string, platformMetadata: PlatformMetadata) {
  try {
    const pageView = {
      page,
      timestamp: new Date().toISOString(),
      platformMetadata,
      sessionId: platformMetadata.sessionInfo.sessionId
    };

    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', pageView);
    }

    // Save to analytics service or Firestore if needed
  } catch (error) {
    console.warn('Failed to track page view:', error);
  }
}

export function trackConversion(conversionType: string, value?: number, platformMetadata?: PlatformMetadata) {
  try {
    const conversion = {
      type: conversionType,
      value,
      timestamp: new Date().toISOString(),
      platformMetadata
    };

    if (process.env.NODE_ENV === 'development') {
      console.log('Conversion:', conversion);
    }

    // Save to analytics service
  } catch (error) {
    console.warn('Failed to track conversion:', error);
  }
}
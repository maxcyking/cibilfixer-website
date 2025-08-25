# Phone Authentication Setup Guide

This guide will help you set up Firebase Phone Authentication for OTP verification in your application.

## Prerequisites

- Firebase project created
- Firebase SDK installed and configured
- Valid Firebase configuration in `lib/firebase.ts`

## Step 1: Enable Phone Authentication in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `Cibil Fixer-53840`
3. Navigate to **Authentication** → **Sign-in method**
4. Find **Phone** in the list of providers
5. Click on **Phone** to configure it
6. Toggle **Enable** to turn on Phone Authentication
7. Click **Save**

## Step 2: Add Your Domain to Authorized Domains

1. In Firebase Console, go to **Authentication** → **Settings** → **Authorized domains**
2. Add these domains:
   - `localhost` (for development)
   - `Cibil Fixer-53840.web.app` (for production)
   - `Cibil Fixer-53840.firebaseapp.com` (Firebase hosting domain)
   - Your custom domain (if any)

## Step 3: Configure reCAPTCHA (Important for Phone Auth)

### For Development (localhost)
- No additional configuration needed
- Firebase will use test mode reCAPTCHA

### For Production
1. Go to [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin)
2. Create a new site (if not already done)
3. Choose **reCAPTCHA v2** → **"I'm not a robot" Checkbox**
4. Add your domain: `Cibil Fixer-53840.web.app`
5. Copy the **Site Key** (you might need this for advanced configurations)

## Step 4: Test Phone Authentication

1. Start your development server: `npm run dev`
2. Navigate to the form with phone verification
3. Enter a valid phone number (with +91 prefix for India)
4. Click "Send OTP"
5. Check your phone for the OTP code
6. Enter the OTP to verify

## Common Issues and Troubleshooting

### 1. `auth/internal-error` Error

**Cause**: Phone Authentication not enabled or reCAPTCHA issues

**Solutions**:
- ✅ **Enable Phone Authentication** in Firebase Console (Step 1)
- ✅ **Add your domain** to authorized domains (Step 2)
- ✅ **Clear browser cache** and cookies
- ✅ **Refresh the page** and try again
- ✅ **Check Firebase project ID** in your configuration
- ✅ **Ensure you're using the correct Firebase project**

### 2. `auth/captcha-check-failed` Error

**Cause**: reCAPTCHA verification failed

**Solutions**:
- Check if your domain is added to authorized domains
- Clear browser cache and try again
- Make sure you're not using an ad blocker that blocks reCAPTCHA

### 3. `auth/invalid-phone-number` Error

**Cause**: Phone number format is incorrect

**Solutions**:
- Ensure phone number starts with country code (+91 for India)
- Use format: +91XXXXXXXXXX (10 digits after +91)
- Remove any spaces, dashes, or special characters

### 4. `auth/quota-exceeded` Error

**Cause**: SMS quota exceeded for the day

**Solutions**:
- This is a Firebase limitation (free tier has daily SMS limits)
- Wait 24 hours or upgrade to a paid plan
- Use Firebase Test Phone Numbers for testing

## Test Phone Numbers (For Development)

You can use Firebase test phone numbers that don't actually send SMS:

1. In Firebase Console → **Authentication** → **Sign-in method**
2. Scroll down to **Phone numbers for testing**
3. Add test numbers like:
   - Phone: `+91 9999999999`, OTP: `123456`
   - Phone: `+91 8888888888`, OTP: `654321`

## Security Rules for Document Upload

Make sure your Firestore and Storage rules are properly configured:

```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /credit-requests/{document} {
      allow write: if request.auth != null;
      allow read: if false; // Only backend should read
    }
  }
}
```

```javascript
// storage.rules
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /credit-requests/{allPaths=**} {
      allow write: if request.auth != null;
      allow read: if false; // Only backend should read
    }
  }
}
```

## Important Notes

1. **Phone Authentication requires a real phone number** in production
2. **Test phone numbers only work in development** mode
3. **SMS charges apply** for real phone numbers (check Firebase pricing)
4. **Daily SMS limits** exist on free tier (upgrade for higher limits)
5. **reCAPTCHA must work** for phone authentication to function

## Deployment Steps

1. Deploy your updated rules:
   ```bash
   firebase deploy --only firestore:rules
   firebase deploy --only storage
   ```

2. Deploy your application:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

## Verification Checklist

Before going live, verify:

- [ ] Phone Authentication enabled in Firebase Console
- [ ] Domain added to authorized domains
- [ ] Test with a real phone number
- [ ] OTP arrives within 1-2 minutes
- [ ] Document upload works after OTP verification
- [ ] User is signed out after form submission
- [ ] Storage and Firestore rules are deployed

## Support

If you continue to face issues:

1. Check Firebase Console → **Authentication** → **Users** to see if phone authentication is working
2. Check browser developer console for detailed error messages
3. Verify Firebase configuration in `lib/firebase.ts`
4. Ensure you're using the correct Firebase project

## Current Configuration

- **Project ID**: Cibil Fixer-53840
- **Auth Domain**: Cibil Fixer-53840.firebaseapp.com
- **Storage Bucket**: Cibil Fixer-53840.firebasestorage.app
- **Hosting URL**: https://Cibil Fixer-53840.web.app

---

**Note**: Phone Authentication is a paid feature in Firebase. While setup is free, SMS charges apply for each verification. Consider the costs for production usage. 
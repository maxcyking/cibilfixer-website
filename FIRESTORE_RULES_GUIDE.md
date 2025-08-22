# Firestore Security Rules Guide

## Overview

This guide explains the Firestore security rules for the Rameshwar CIBIL Report Management System. The rules control who can read, write, update, and delete data in your Firestore database.

## Complete Firestore Rules

Copy and paste these rules into your Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper function to check if user is admin
    function isAdmin() {
      return request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin';
    }
    
    // Helper function to check if user is authenticated
    function isAuthenticated() {
      return request.auth != null;
    }
    
    // Users Collection Rules
    match /users/{userId} {
      // Users can read their own document
      allow read: if isAuthenticated() && request.auth.uid == userId;
      
      // Users can create their own document during signup
      allow create: if isAuthenticated() && request.auth.uid == userId;
      
      // Users can update their own document (for profile updates)
      allow update: if isAuthenticated() && request.auth.uid == userId;
      
      // Only admins can delete user documents
      allow delete: if isAdmin();
    }
    
    // Allow admins to read all users
    match /users/{userId} {
      allow read: if isAdmin();
      allow update: if isAdmin();
    }
    
    // Allow checking if referral codes exist (for validation)
    match /users/{userId} {
      allow get: if isAuthenticated() && 
        resource.data.keys().hasAny(['myReferralCode']);
    }
    
    // Credit Requests Collection Rules
    match /creditRequests/{requestId} {
      // Anyone can create a credit request (public form)
      allow create: if true;
      
      // Allow read if:
      // 1. User is admin
      // 2. Request belongs to the authenticated user (by mobile number)
      // 3. User is searching by customerId (for status tracking)
      allow read: if isAdmin() || 
        (isAuthenticated() && resource.data.mobile == request.auth.token.phone_number) ||
        (resource.data.customerId != null);
      
      // Only admins can update credit requests (to change status)
      allow update: if isAdmin();
      
      // Only admins can delete credit requests
      allow delete: if isAdmin();
    }
    
    // Allow listing credit requests for admins only
    match /creditRequests/{requestId} {
      allow list: if isAdmin();
    }
    
    // Partners/Sales Representatives can see requests referred by them
    match /creditRequests/{requestId} {
      allow read: if isAuthenticated() && 
        resource.data.referralCode == get(/databases/$(database)/documents/users/$(request.auth.uid)).data.myReferralCode;
    }
  }
}
```

## Rules Breakdown

### 1. Helper Functions

```javascript
function isAdmin() {
  return request.auth != null && 
    get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin';
}
```
- Checks if the current user has an 'Admin' role
- Used throughout rules for admin-only operations

```javascript
function isAuthenticated() {
  return request.auth != null;
}
```
- Simply checks if a user is logged in
- Basic authentication check

### 2. Users Collection Rules

**Self-Management:**
- Users can read, create, and update their own documents
- Ensures users can only manage their own profiles

**Admin Access:**
- Admins can read and update any user document
- Admins can delete user accounts

**Referral Code Validation:**
- Allows checking if a referral code exists
- Used during registration to validate referral codes

### 3. Credit Requests Collection Rules

**Public Form Submission:**
```javascript
allow create: if true;
```
- Anyone can create a credit request (no authentication required)
- Enables public form submission

**Reading Requests:**
- Admins can read any request
- Users can read requests with their mobile number
- Anyone can read a request by Customer ID (for status tracking)

**Request Management:**
- Only admins can update requests (change status)
- Only admins can delete requests
- Only admins can list all requests

**Partner Access:**
- Partners can view requests that used their referral code
- Helps partners track their referrals

## Deployment Instructions

### Step 1: Access Firebase Console
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `future-capital-91977`

### Step 2: Navigate to Firestore Rules
1. Click on "Firestore Database" in the left sidebar
2. Click on the "Rules" tab at the top

### Step 3: Deploy Rules
1. Delete all existing rules in the editor
2. Copy the complete rules from this guide
3. Paste them into the rules editor
4. Click "Publish" button
5. Wait for confirmation message

### Step 4: Test Rules
Test each scenario to ensure rules work correctly:

1. **Public Form Submission:**
   - Go to `/raise-request` without logging in
   - Submit a form - should work

2. **Status Tracking:**
   - Go to `/track-status`
   - Enter a valid Customer ID - should show details

3. **Partner Registration:**
   - Register as a partner
   - Should create user document successfully

4. **Admin Access:**
   - Create an admin user manually in Firestore
   - Test admin panel functionality

## Security Best Practices

1. **Never use allow read, write: if true**
   - This allows anyone to read/write everything
   - Only use for specific operations like public form submission

2. **Always validate user identity**
   - Use `request.auth.uid` to verify user identity
   - Compare with document IDs or fields

3. **Use helper functions**
   - Reduces code duplication
   - Makes rules easier to maintain

4. **Test thoroughly**
   - Use Firebase Emulator for local testing
   - Test all user roles and scenarios

## Troubleshooting

### Common Issues:

1. **"Missing or insufficient permissions"**
   - Check if rules are published
   - Verify user authentication status
   - Check if trying to access correct collection

2. **"Invalid rules syntax"**
   - Check for missing semicolons or brackets
   - Verify function names are correct
   - Ensure proper indentation

3. **Rules not working after publish**
   - Clear browser cache
   - Wait 1-2 minutes for propagation
   - Check Firebase Console for errors

### Debug Tips:

1. Use Firebase Console's Rules Playground to test specific scenarios
2. Add temporary logging rules to debug issues
3. Check browser console for detailed error messages

## Future Considerations

When adding new features, remember to:

1. Update rules for new collections
2. Test with all user roles
3. Document changes in this guide
4. Consider backward compatibility

## Support

For help with Firestore rules:
- [Firebase Documentation](https://firebase.google.com/docs/firestore/security/get-started)
- [Rules Reference](https://firebase.google.com/docs/firestore/security/rules-reference)
- Firebase Support Team 
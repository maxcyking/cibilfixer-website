# Quick Fix for Firestore Permissions Error

## The Error
```
Error submitting request: FirebaseError: Missing or insufficient permissions.
```

## Immediate Solution

Go to Firebase Console and update your Firestore rules with this simplified version:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow all operations on creditRequests collection (temporary for testing)
    match /creditRequests/{document=**} {
      allow read, write: if true;
    }
    
    // Existing user rules
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow create: if request.auth != null && request.auth.uid == userId;
      allow update: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Steps to Apply:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `future-capital-91977`
3. Navigate to **Firestore Database** → **Rules**
4. Replace existing rules with the above
5. Click **Publish**

## Important Notes:

- This is a temporary fix for testing
- The rule `allow read, write: if true` makes creditRequests publicly accessible
- Once working, update to more secure rules from `firestore.rules`

## After Testing Works:

Replace with the production rules from `firestore.rules` file which has proper security. 
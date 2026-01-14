# Firebase Setup Instructions

## Fixing Firestore Permissions Error

The "Missing or insufficient permissions" error occurs because Firestore has default security rules that block all read/write operations. You need to update these rules in the Firebase Console.

### Steps to Fix:

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com/
   - Select your project: `future-capital-91977`

2. **Navigate to Firestore Database**
   - In the left sidebar, click on "Firestore Database"
   - Click on the "Rules" tab at the top

3. **Update Security Rules**
   - Copy the complete rules from `firestore.rules` file or `FIRESTORE_RULES_GUIDE.md`
   - Replace all existing rules in the Firebase Console
   - Click "Publish" to save and activate the new rules

### Quick Rules Overview:

The rules enable:
- ✅ Anyone can submit credit improvement requests (public form)
- ✅ Users can track their request status using Customer ID
- ✅ Partners/Sales Reps can register and manage their profiles
- ✅ Partners can view requests that used their referral code
- ✅ Admins can manage all users and requests
- ❌ Unauthorized users cannot access private data

For detailed rules documentation, see: **[FIRESTORE_RULES_GUIDE.md](./FIRESTORE_RULES_GUIDE.md)**

## User Data Structure

When a user registers, the following data is stored in Firestore:

```javascript
{
  uid: "user_auth_id",
  email: "user@email.com",
  fullName: "John Doe",
  mobile: "1234567890",
  role: "Partner" | "Sales Representative",
  myReferralCode: "P1234567" | "S1234567", // P for Partner, S for Sales Rep
  referredBy: "referral_code" | null,
  kycStatus: "pending",
  kycProgress: 0,
  status: "pending", // Admin will change to "active"
  createdAt: "2024-01-01T00:00:00.000Z",
  isActive: false,
  earnings: 0,
  referrals: 0
}
```

## Credit Request Data Structure

When a customer submits a credit improvement request:

```javascript
{
  customerId: "CRM2412345", // Auto-generated unique ID
  issue: "LOW SCORE" | "WRITE OFF" | "SETTLEMENT" | "OTHER ISSUE",
  fullName: "Customer Name",
  fatherName: "Father Name",
  dob: "1990-01-01",
  gender: "Male" | "Female" | "Other",
  mobile: "9414118156",
  pan: "ABCDE1234F",
  aadhar: "123456789012",
  address: "House/Street Address",
  village: "Village Name",
  tehsilCity: "City Name",
  district: "District Name",
  state: "State Name",
  pin: "123456",
  documents: {
    aadhar: "filename.pdf",
    pan: "filename.jpg",
    // ... other documents
  },
  referralCode: "P1234567", // Who referred this customer
  remark: "Additional notes",
  transactionId: "UPI123456789",
  status: "Reviewing" | "CONTACTED" | "INTERESTED" | "NOT INTERESTED" | "NO RESPONSE" | "CONVERTED TO CUSTOMER",
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z"
}
```

## Environment Variables Setup

To properly set up environment variables:

1. Create a `.env.local` file in your project root
2. Add the following content:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDQTh2TpShcm1m9CCTkUT0C9qoAnQagkyg,
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=Cibil Fixer-53840.firebaseapp.com,
NEXT_PUBLIC_FIREBASE_PROJECT_ID=Cibil Fixer-53840,
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=Cibil Fixer-53840.firebasestorage.app,
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=421122142100,
NEXT_PUBLIC_FIREBASE_APP_ID=1:421122142100:web:813ceab7e199def72d2981,
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-THP0BX0MRQ

```

3. Restart your development server after creating the file

## Testing the Features

### 1. Partner Registration
- Go to `/become-partner`
- Register as Partner or Sales Representative
- Check Firestore for new user document with pending status

### 2. Credit Request Submission
- Go to `/raise-request` or click "Raise Request Now" on homepage
- Fill all 3 steps of the form
- Submit and note the Customer ID
- Check Firestore for new request in `creditRequests` collection

### 3. Status Tracking
- Go to `/track-status`
- Enter the Customer ID from step 2
- Should display request details and current status

## Admin Panel Requirements

For the admin panel to work properly, you'll need to:

1. Create an admin user manually in Firestore:
   ```javascript
   {
     uid: "admin_user_id",
     email: "admin@rameshwarcibil.com",
     role: "Admin",
     fullName: "Admin User",
     // ... other required fields
   }
   ```

2. The admin will have permissions to:
   - View all users and credit requests
   - Update user status (pending → active)
   - Update request status through the workflow
   - Delete users if needed

## Troubleshooting

If you still get permission errors:
- Make sure you've published the rules (not just saved them)
- Check that you're using the correct collection names (`users`, `creditRequests`)
- Verify the rules syntax in Firebase Console (it will show errors)
- Check the browser console for detailed error messages
- Clear browser cache and retry
- Wait 1-2 minutes after publishing rules for them to propagate 
# Environment Setup Instructions

## Quick Fix for Build Errors

The build errors you're seeing are caused by missing Firebase environment variables. Follow these steps to fix them:

### Step 1: Create `.env.local` file

Create a new file named `.env.local` in your project root directory (same level as `package.json`) with the following content:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDQTh2TpShcm1m9CCTkUT0C9qoAnQagkyg
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=Cibil Fixer-53840.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=Cibil Fixer-53840
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=Cibil Fixer-53840.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=421122142100
NEXT_PUBLIC_FIREBASE_APP_ID=1:421122142100:web:813ceab7e199def72d2981
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-THP0BX0MRQ
```

### Step 2: Restart Development Server

After creating the `.env.local` file:

1. Stop your development server (Ctrl+C)
2. Run `npm run dev` again

### Step 3: Try Building Again

Now try building the project:

```bash
npm run build
```

## What Was Fixed

1. **Firebase Configuration**: Updated `lib/firebase.ts` to provide fallback values and handle build-time scenarios gracefully
2. **Next.js Config**: Removed deprecated `appDir` option from `next.config.js`
3. **Environment Variables**: Provided fallback Firebase configuration values

## Alternative: Command Line Method

If you prefer using command line, run this command in your project root:

**For Windows (PowerShell):**
```powershell
@"
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDQTh2TpShcm1m9CCTkUT0C9qoAnQagkyg
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=Cibil Fixer-53840.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=Cibil Fixer-53840
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=Cibil Fixer-53840.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=421122142100
NEXT_PUBLIC_FIREBASE_APP_ID=1:421122142100:web:813ceab7e199def72d2981
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-THP0BX0MRQ
"@ | Out-File -FilePath .env.local -Encoding utf8
```

**For macOS/Linux:**
```bash
cat > .env.local << 'EOF'
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDQTh2TpShcm1m9CCTkUT0C9qoAnQagkyg
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=Cibil Fixer-53840.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=Cibil Fixer-53840
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=Cibil Fixer-53840.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=421122142100
NEXT_PUBLIC_FIREBASE_APP_ID=1:421122142100:web:813ceab7e199def72d2981
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-THP0BX0MRQ
EOF
```

## Troubleshooting

If you still get build errors:

1. **Check file location**: Make sure `.env.local` is in the root directory, not in a subfolder
2. **Check file name**: It should be exactly `.env.local` (with the dot at the beginning)
3. **Restart terminal**: Close and reopen your terminal/PowerShell
4. **Clear Next.js cache**: Run `rm -rf .next` (or `rmdir /s .next` on Windows) then build again

## Security Note

The `.env.local` file is already in `.gitignore` and won't be committed to version control. This is important for security.

## Next Steps

After the build works successfully:

1. Set up your Firebase project following `FIREBASE_SETUP.md`
2. Update Firestore security rules as described in `FIRESTORE_RULES_GUIDE.md`
3. Test all functionality including form submission and status tracking 
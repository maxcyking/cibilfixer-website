'use client';

import { useState } from 'react';
import { FormData } from '@/app/raise-request/page';
import { Upload, X, AlertCircle } from 'lucide-react';
import { db, storage, auth } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signOut } from 'firebase/auth';

interface StepTwoProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onComplete: (customerId: string) => void;
  onPrev: () => void;
}

export default function StepTwo({ formData, setFormData, onComplete, onPrev }: StepTwoProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});

  const documentTypes = [
    { key: 'aadhar', label: 'Aadhar Card' },
    { key: 'pan', label: 'PAN Card' },
    { key: 'voterId', label: 'Voter ID' },
    { key: 'dl', label: 'Driving License' },
    { key: 'cicReport', label: 'CIC Report' },
    { key: 'bankDetails', label: 'Bank Details' },
    { key: 'other', label: 'Other Documents' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, docType: string) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, [docType]: 'File size must be less than 5MB' }));
        return;
      }
      
      // Validate file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, [docType]: 'Only PDF, JPG, JPEG, PNG files are allowed' }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        documents: {
          ...prev.documents,
          [docType]: file
        }
      }));
      
      // Clear any previous errors for this file
      if (errors[docType]) {
        setErrors(prev => ({ ...prev, [docType]: '' }));
      }
    }
  };

  const removeFile = (docType: string) => {
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [docType]: undefined
      }
    }));
  };

  const generateCustomerId = () => {
    const date = new Date();
    const year = date.getFullYear().toString().substr(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const random = Math.floor(10000 + Math.random() * 90000);
    return `CRM${year}${month}${random}`;
  };

  const uploadDocuments = async (customerId: string, documents: FormData['documents']) => {
    const uploadedDocuments: Record<string, string> = {};
    
    for (const [key, file] of Object.entries(documents)) {
      if (file) {
        try {
          setUploadProgress(prev => ({ ...prev, [key]: 0 }));
          
          // Create a reference to the file location in Firebase Storage
          const fileName = `${customerId}_${key}_${Date.now()}_${file.name}`;
          const storageRef = ref(storage, `credit-requests/${customerId}/${fileName}`);
          
          // Upload the file
          const snapshot = await uploadBytes(storageRef, file);
          
          // Get the download URL
          const downloadURL = await getDownloadURL(snapshot.ref);
          
          uploadedDocuments[key] = downloadURL;
          setUploadProgress(prev => ({ ...prev, [key]: 100 }));
        } catch (error) {
          console.error(`Error uploading ${key}:`, error);
          throw new Error(`Failed to upload ${key}. Please try again.`);
        }
      }
    }
    
    return uploadedDocuments;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.village) newErrors.village = 'Village is required';
    if (!formData.tehsilCity) newErrors.tehsilCity = 'Tehsil/City is required';
    if (!formData.district) newErrors.district = 'District is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.pin) newErrors.pin = 'PIN code is required';
    else if (!/^\d{6}$/.test(formData.pin)) newErrors.pin = 'Enter valid 6-digit PIN code';

    // Check if at least one document is uploaded
    const hasDocuments = Object.values(formData.documents).some(doc => doc !== undefined);
    if (!hasDocuments) {
      newErrors.documents = 'Please upload at least one document';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({});
    setUploadProgress({});

    try {
      const customerId = generateCustomerId();
      
      // Upload documents to Firebase Storage
      const uploadedDocuments = await uploadDocuments(customerId, formData.documents);
      
      // Prepare data for Firestore
      const requestData = {
        customerId,
        issue: formData.issue,
        selectedPackage: formData.selectedPackage,
        packagePrice: formData.packagePrice,
        fullName: formData.fullName,
        fatherName: formData.fatherName,
        dob: formData.dob,
        gender: formData.gender,
        mobile: formData.mobile,
        email: formData.email,
        pan: formData.pan,
        aadhar: formData.aadhar,
        address: formData.address,
        village: formData.village,
        tehsilCity: formData.tehsilCity,
        district: formData.district,
        state: formData.state,
        pin: formData.pin,
        referralCode: formData.referralCode,
        remark: formData.remark,
        documents: uploadedDocuments, // Store download URLs instead of file names
        // Platform and tracking information
        platform: formData.platformMetadata?.platform || 'website',
        platformMetadata: formData.platformMetadata || null,
        submissionSource: 'website',
        status: 'Reviewing',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      // Add to Firestore
      await addDoc(collection(db, 'creditRequests'), requestData);

      // Sign out the user after successful submission
      try {
        await signOut(auth);
      } catch (signOutError) {
        console.warn('Could not sign out user:', signOutError);
        // Don't block the success flow if sign out fails
      }

      onComplete(customerId);
    } catch (error) {
      console.error('Error submitting request:', error);
      setErrors({ submit: error instanceof Error ? error.message : 'Failed to submit request. Please try again.' });
    } finally {
      setLoading(false);
      setUploadProgress({});
    }
  };

  const handleClear = () => {
    setFormData(prev => ({
      ...prev,
      address: '',
      village: '',
      tehsilCity: '',
      district: '',
      state: '',
      pin: '',
      documents: {},
      referralCode: '',
      remark: ''
    }));
    setErrors({});
    setUploadProgress({});
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 2: Address & Documents</h2>

      <div className="space-y-6">
        {/* Address Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Address Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.address ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="House/Flat No., Street Name"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.address}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Village *
              </label>
              <input
                type="text"
                name="village"
                value={formData.village}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.village ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter village name"
              />
              {errors.village && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.village}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tehsil/City *
              </label>
              <input
                type="text"
                name="tehsilCity"
                value={formData.tehsilCity}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.tehsilCity ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter tehsil or city"
              />
              {errors.tehsilCity && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.tehsilCity}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                District *
              </label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.district ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter district"
              />
              {errors.district && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.district}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State *
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.state ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter state"
              />
              {errors.state && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.state}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                PIN Code *
              </label>
              <input
                type="text"
                name="pin"
                value={formData.pin}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.pin ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter 6-digit PIN code"
                maxLength={6}
              />
              {errors.pin && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.pin}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Document Upload Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Document Upload *
            {errors.documents && (
              <span className="text-sm text-red-600 ml-2">
                (Please upload at least one document)
              </span>
            )}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {documentTypes.map((docType) => (
              <div key={docType.key} className="border border-gray-300 rounded-lg p-4">
                <h4 className="font-medium text-gray-700 mb-3">{docType.label}</h4>
                
                {formData.documents[docType.key as keyof typeof formData.documents] ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded p-3">
                      <span className="text-sm text-green-700 truncate">
                        {(formData.documents[docType.key as keyof typeof formData.documents] as File)?.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFile(docType.key)}
                        className="text-red-500 hover:text-red-700"
                        aria-label="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    {uploadProgress[docType.key] !== undefined && uploadProgress[docType.key] < 100 && (
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${uploadProgress[docType.key]}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg p-6 cursor-pointer hover:border-blue-400 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">Choose file</span>
                    <span className="text-xs text-gray-400">PDF, JPG, PNG (Max 5MB)</span>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange(e, docType.key)}
                      className="hidden"
                    />
                  </label>
                )}
                
                {errors[docType.key] && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors[docType.key]}
                  </p>
                )}
              </div>
            ))}
          </div>
          {errors.documents && (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.documents}
            </p>
          )}
        </div>

        {/* Additional Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Referral Code (Optional)
              </label>
              <input
                type="text"
                name="referralCode"
                value={formData.referralCode}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter referral code if any"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Remarks (Optional)
              </label>
              <textarea
                name="remark"
                value={formData.remark}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Any additional information"
              />
            </div>
          </div>
        </div>

        {/* Error Message */}
        {errors.submit && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" />
              {errors.submit}
            </p>
          </div>
        )}

        {/* Loading Message */}
        {loading && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-600 flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
              {Object.keys(uploadProgress).length > 0 ? 'Uploading documents and submitting request...' : 'Submitting request...'}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={onPrev}
            disabled={loading}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            Previous
          </button>
          
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={handleClear}
              disabled={loading}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Clear Form
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Uploading & Submitting...' : 'Submit Request'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
import React, { useState } from 'react';

const ProfileImageUploader: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setImage(null);
  };

  return (
    <div>
        <h2 className="font-semibold text-2xl">รูปโปรไฟล์</h2>
    <div className="flex flex-col items-center p-4">
      
      <div className="relative w-40 h-40 mb-4">
        {image ? (
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-full">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>
      <div className="flex space-x-4">
        <label htmlFor="file-upload" className="cursor-pointer bg-blue-500 text-white p-2 rounded-full shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4zm8 8v4m0-4H8m4 0h4" />
          </svg>
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        <button
          onClick={handleImageDelete}
          className="bg-red-500 text-white p-2 rounded-full shadow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProfileImageUploader;

import React from 'react';
import { uploadImage } from '../api/mockApi';

interface Props {
  onUpload: () => void;
}

const ImageUploader: React.FC<Props> = ({ onUpload }) => {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      uploadImage(file.name, reader.result as string);
      onUpload();
    };
    reader.readAsDataURL(file);
  };

  return <input type="file" accept="image/*" onChange={handleUpload} />;
};

export default ImageUploader;
import React from 'react';
import { uploadImage } from '../api/mockApi';

const ImageUploader: React.FC = () => {
    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            uploadImage(file.name, reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    return (
        <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        style={({ cursor: 'pointer'})}
        />
    );
};

export default ImageUploader;
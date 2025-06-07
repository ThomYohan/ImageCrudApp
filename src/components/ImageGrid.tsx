import React, { useEffect, useState } from 'react';
// import { getImages, deleteImage } from '../api/mockApi';
import type { ImageData } from '../api/mockApi'
import ImageCard from './ImageCard';

interface Props {
    images: ImageData[];
    searchTerm: string;
    onDelete: () => void;
}

const ImageGrid: React.FC<Props> = ({ images, searchTerm, onDelete }) => {
    const filtered = images.filter((img) =>
        img.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='imageGrid'>
            {filtered.map((img) => (
                <ImageCard key={img.id} image={img} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default ImageGrid
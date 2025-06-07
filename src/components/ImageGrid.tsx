import React, { useEffect, useState } from 'react';
import { getImages, deleteImage } from '../api/mockApi';
import type { ImageData } from '../api/mockApi'
import ImageCard from './ImageCard';

interface Props {
    searchTerm: string;
}

const ImageGrid: React.FC<Props> = ({ searchTerm }) => {
    const [images, setImages] = useState<ImageData[]>([]);

    useEffect(() => {
        setImages(getImages());
    }, []);

    const handleDelete = (id: string) => {
        deleteImage(id);
        setImages(getImages());
    };

    const filtered = images.filter((img) =>
    img.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {filtered.map((img) => (
                <ImageCard key={img.id} image={img} onDelete={() => handleDelete(img.id)} />
            ))}
        </div>
    );
};

export default ImageGrid
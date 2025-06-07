import React from 'react';
import type { ImageData } from '../api/mockApi';

interface Props {
    image: ImageData;
    onDelete: () => void;
}

const ImageCard: React.FC<Props> = ({ image, onDelete }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', textAlign: 'center'}}>
            <img
            src={image.url}
            alt={image.name}
            style={{ width: '100%', height: '150px', objectFit: 'cover'}}
            />
            <p>{image.name}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default ImageCard;
import React from 'react';
import type { ImageData } from '../api/mockApi';
import { deleteImage } from '../api/mockApi';

interface Props {
    image: ImageData;
    onDelete: () => void;
}

const ImageCard: React.FC<Props> = ({ image, onDelete }) => {
    const handleDelete = () => {
      deleteImage(image.id);
      onDelete();
    };
  
    return (
      <div className='imageCard' >
        <div style={{ height: '150px', marginBottom: '0.5rem' }}>
          <img
            src={image.url}
            alt={image.name}
            className='image'
          />
        </div>
        <p>{image.name}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };

export default ImageCard;
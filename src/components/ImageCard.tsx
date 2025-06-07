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
      <div style={{
        border: '1px solid #ccc',
        padding: '0.5rem',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <div style={{ height: '150px', marginBottom: '0.5rem' }}>
          <img
            src={image.url}
            alt={image.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <p>{image.name}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };

// const ImageCard: React.FC<Props> = ({ image, onDelete }) => {
//     return (
//         <div style={{ border: '1px solid #ccc', padding: '1rem', textAlign: 'center', height: '150px', marginBottom: '0.5rem'}}>
//             <img
//             src={image.url}
//             alt={image.name}
//             style={{ width: '100%', height: '150px', objectFit: 'cover'}}
//             />
//             <p>{image.name}</p>
//             <button onClick={onDelete}>Delete</button>
//         </div>
//     );
// };

export default ImageCard;
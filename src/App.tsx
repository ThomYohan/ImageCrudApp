import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import ImageUploader from './components/ImageUploader'
import ImageGrid from './components/ImageGrid'
import { getImages } from './api/mockApi'
import type { ImageData } from './api/mockApi'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    setImages(getImages());
  }, []);

  const refreshImages = () => {
    setImages(getImages());
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ImageUploader onUpload={refreshImages} />
      </div>
      <h2>{images.length} images</h2>
      <ImageGrid
        images={images}
        searchTerm={searchTerm}
        onDelete={() => setImages(getImages())}
      />
    </div>
  );
}

export default App

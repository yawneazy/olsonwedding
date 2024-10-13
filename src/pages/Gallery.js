import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/firebaseConfig';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery = () => {
  const { section } = useParams();
  const [imageUrls, setImageUrls] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [folder, setFolder] = useState('');
  const [headerTitle, setHeaderTitle] = useState('');
  
  const folderMap = {
    'getting-ready': { folderName: 'Getting Ready', headerTitle: 'Getting Ready' },
    'ceremony': { folderName: 'Ceremony', headerTitle: 'Ceremony' },
    'family-bridal': { folderName: 'Family & Bridal Party', headerTitle: 'Family & Bridal Party' },
    'bride-groom': { folderName: 'Bride & Groom', headerTitle: 'Bride & Groom' },
    'reception': { folderName: 'Reception', headerTitle: 'Reception' },
  };
  
  useEffect(() => {
    const fetchImages = async () => {
      if (section && folderMap[section]) {
        setLoading(true);
        const { folderName, headerTitle } = folderMap[section];
        try {
          const listRef = ref(storage, folderName);
          const res = await listAll(listRef);
          const urls = await Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
          setImageUrls(urls);
          setFolder(folderName);
          setHeaderTitle(headerTitle);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
        setLoading(false);
      }
    };

    fetchImages();
  }, [section]);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  // useEffect(() => {
  //   if (isOpen && imageUrls.length > 0) {
  //     setPhotoIndex(photoIndex % imageUrls.length);
  //   }
  // }, [isOpen, imageUrls]);

  return (
    <div>
       <Link to="/" className="back-button">Back to Gallery</Link>
      <h1 className="gallery-header">{headerTitle}</h1>
      {loading && <div>Loading...</div>}
      <div className="image-gallery">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Gallery image ${index}`}
            className="gallery-image"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={imageUrls[photoIndex]}
          nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
          prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + imageUrls.length - 1) % imageUrls.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageUrls.length)
          }
        />
      )}
    </div>
  );
};

export default Gallery;

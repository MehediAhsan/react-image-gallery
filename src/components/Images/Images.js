import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Image from '../Image/Image';

const Images = () => {
    const [images, setImages] = useState([]);
    console.log(images)
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect(() => {
    fetch(`https://pixabay.com/api/?key=30129448-9a02d8d0f7801c5718fe0375a&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
    }, [term]);

    return (
        <div className="container mx-auto my-5">

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <Image key={image.id} image={image} />
        ))}
      </div>}
    </div>
    );
};

export default Images;
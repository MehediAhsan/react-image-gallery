import React from 'react';
import { GrView } from 'react-icons/gr';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';

const Image = ({ image }) => {
    const tags = image.tags.split(',');
    console.log(image)

    return (
        <div className="rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full h-80"/>
      <div className="px-6 py-4">
        <div className='flex justify-between items-center'>
            <div className="font-bold text-purple-500 text-xl">
            Photo by {image.user}
            </div>
            <div className='flex gap-3'>
            <li className='flex items-center gap-1'>
                <AiOutlineLike />
                <strong>{image.likes}</strong>
            </li>
            <li className='flex items-center gap-1'>
                <FaRegComment />
                <strong>{image.comments}</strong>
            </li>
          </div>
        </div>
        <div className='flex justify-between mt-2'>
            <div>
                <strong>Downloads: </strong>
                {image.downloads}
            </div>
            <div className='flex items-center gap-2'>
                <GrView />
                <strong>{image.views}</strong> 
            </div>  
        </div>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
        ))}
      </div>
    </div>
    );
};

export default Image;
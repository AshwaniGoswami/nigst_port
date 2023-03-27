import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(2000);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Replace with your own image data
    const imageData = [
      { id: 1, url: 'https://via.placeholder.com/500x500?text=Image+1', tags: ['category1'] },
      { id: 2, url: 'https://via.placeholder.com/500x500?text=Image+2', tags: ['category2'] },
      { id: 3, url: 'https://via.placeholder.com/500x500?text=Image+3', tags: ['category1', 'category2'] },
      { id: 4, url: 'https://via.placeholder.com/500x500?text=Image+4', tags: ['category3'] },
      { id: 5, url: 'https://via.placeholder.com/500x500?text=Image+5', tags: ['category2', 'category3'] },
    ];
    setImages(imageData);
    const allCategories = imageData.reduce((acc, cur) => {
      return acc.concat(cur.tags);
    }, []);
    setCategories(Array.from(new Set(allCategories)));
  }, []);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleSpeedChange = (event) => {
    setSpeed(parseInt(event.target.value));
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentImageIndex(0);
    setPlaying(false);
  };

  useEffect(() => {
    let intervalId = null;
    if (playing) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const filteredImages = selectedCategory
            ? images.filter((image) => image.tags.includes(selectedCategory))
            : images;
          return prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1;
        });
      }, speed);
    }
    return () => clearInterval(intervalId);
  }, [playing, speed, images, selectedCategory]);

  return (
    <div className="container mx-auto py-8">
      <div className="mb-4 flex justify-between">
        <div>
          <label htmlFor="categorySelect" className="block font-bold mb-2">
            Category:
          </label>
          <select
            id="categorySelect"
            className="border border-gray-400 py-2 px-4 rounded-md"
            value={selectedCategory || ''}
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="speedSelect" className="block font-bold mb-2">
            Speed:
          </label>
          <select
            id="speedSelect"
            className="border border-gray-400 py-2 px-4 rounded-md"
            value={speed}
        onChange={handleSpeedChange}
      >
        <option value="1000">1 second</option>
        <option value="2000">2 seconds</option>
        <option value="3000">3 seconds</option>
        <option value="4000">4 seconds</option>
      </select>
    </div>
    <div>
      {playing ? (
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md" onClick={handlePause}>
          Pause
        </button>
      ) : (
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md" onClick={handlePlay}>
          Play
        </button>
      )}
    </div>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {selectedCategory
      ? images.filter((image) => image.tags.includes(selectedCategory)).map((image) => (
          <div key={image.id} className="flex justify-center items-center h-64">
            <img src={image.url} alt={image.tags.join(', ')} className="h-full object-cover rounded-md" />
          </div>
        ))
      : images.map((image) => (
          <div key={image.id} className="flex justify-center items-center h-64">
            <img src={image.url} alt={image.tags.join(', ')} className="h-full object-cover rounded-md" />
          </div>
        ))}
  </div>
</div>
  );
};

export default Gallery;

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import PIC1 from '../assets/img/Denny1.jpg';
import PIC2 from '../assets/img/Denny2.jpg';
import PIC3 from '../assets/img/Denny3.jpg';

function Portfolio() {
  const images = [
    PIC1,
    PIC2,
    PIC3,
    'https://example.com/image4.jpg',
  ];

  const videoUrls = [
    'https://www.youtube.com/watch?v=bhakf9nWEsc',
    'https://www.youtube.com/watch?v=fKsGRqnY8n4',
    'https://www.youtube.com/watch?v=9wO0g3ymliM',
    'https://www.youtube.com/watch?v=zaeVevZ5bGA',
    'https://www.youtube.com/watch?v=s_e6saxbXmw',
    'https://www.youtube.com/watch?v=PDxlyjY35i4',
    'https://www.youtube.com/watch?v=dk55GXUn_fM',
    'https://www.youtube.com/watch?v=RlQgZBzBDVQ',
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const getVideoId = (url: string) => {
    const videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      return videoId.substring(0, ampersandPosition);
    }
    return videoId;
  };

  const videoIds = videoUrls.map(getVideoId);

  const cubeControl = useAnimation();

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      videoIds.forEach((videoId, index) => {
        new window.YT.Player(`youtube-player-${index}`, {
          height: '315',
          width: '560',
          videoId: videoId,
          playerVars: { 'playsinline': 1 },
          events: {
            'onReady': () => console.log('Player is ready'),
            'onError': (event: any) => console.error('An error occurred:', event.data),
          },
        });
      });
    };

    // Animate cube
    cubeControl.start({
      rotateY: 360,
      transition: { duration: 2, repeat: Infinity, ease: "linear" }
    });
  }, [videoIds, cubeControl]);

  const openPopUp = (image: string) => {
    setSelectedImage(image);
    setIsPopUpVisible(true);
  };

  const closePopUp = () => {
    setIsPopUpVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h1 
          className="text-5xl font-bold text-center mb-12"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio
        </motion.h1>

        <motion.div
          animate={cubeControl}
          className="w-20 h-20 bg-blue-500 mb-12 mx-auto"
        />
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">General Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openPopUp(image)}
                className="cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Portfolio image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md transform transition duration-300 hover:rotate-3"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold mb-6">YouTube Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoIds.map((videoId, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <div id={`youtube-player-${index}`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {isPopUpVisible && selectedImage && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopUp}
          >
            <motion.div
              className="relative bg-white p-4 rounded-lg shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-700 text-xl"
                onClick={closePopUp}
              >
                &times;
              </button>
              <img 
                src={selectedImage} 
                alt="Selected"
                className="max-w-xs max-h-xs object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Portfolio;

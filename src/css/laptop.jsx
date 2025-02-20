import React, { useEffect, useRef } from 'react';
import macbook from '@/Assets/macbook.mp4';

const Laptop = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 } // Play when 50% of the video is in view
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        src={macbook}
        muted
        className="w-full h-full my-20"
      />
    </div>
  );
};

export default Laptop;

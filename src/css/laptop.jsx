import React, { useEffect, useRef, useState } from 'react';

const Laptop = () => {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("https://res.cloudinary.com/dna3hwzre/video/upload/v1740072168/POT/gkx1u5edktsjg28bk1kx.mp4"); // Default to laptop video

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setVideoSrc(window.matchMedia('(max-width: 768px)').matches ? "https://res.cloudinary.com/dna3hwzre/video/upload/v1740071235/POT/ducztcwagthgxezr14dj.mp4" : "https://res.cloudinary.com/dna3hwzre/video/upload/v1740072168/POT/gkx1u5edktsjg28bk1kx.mp4");
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Listen for resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Play/pause video when in view
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
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoSrc]);

  return (
    <div>
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        className="w-full h-full my-20"
      />
    </div>
  );
};

export default Laptop;

import createGlobe from "cobe";
import { useEffect, useRef, useCallback } from "react";
import { useSpring } from 'react-spring';

export default function Cobe() {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: { mass: 1, tension: 280, friction: 50, precision: 0.001 },
  }));

  useEffect(() => {
    let phi = 0;
    let width = canvasRef.current?.offsetWidth || 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
        globe.resize({ width: width * 2, height: width * 2 });
      }
    };

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: window.devicePixelRatio || 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 3000, // Reduced further for performance
      mapBrightness: 2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1.2, 1.2, 1.2],
      markers: [],
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.003; // Smoother animation
        state.phi = phi + r.get();
      },
    });

    window.addEventListener('resize', onResize);
    onResize(); // Initial resize call

    setTimeout(() => {
      canvasRef.current.style.opacity = '1';
    }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [r]);

  const handlePointerDown = useCallback((e) => {
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
    canvasRef.current.style.cursor = 'grabbing';
  }, []);

  const handlePointerUp = useCallback(() => {
    pointerInteracting.current = null;
    canvasRef.current.style.cursor = 'grab';
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      api.start({ r: delta / 200 });
    }
  }, [api]);

  const handleTouchMove = useCallback((e) => {
    if (pointerInteracting.current !== null && e.touches[0]) {
      const delta = e.touches[0].clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      api.start({ r: delta / 100 });
    }
  }, [api]);

  return (
    <div className="w-full max-w-[400px] aspect-square absolute -right-1">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab opacity-0 transition-opacity duration-1000 ease-in-out"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      />
    </div>
  );
}

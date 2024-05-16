/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";

const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const prevY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentY = entry.boundingClientRect.top;

        if (entry.isIntersecting && prevY.current > currentY) {
          setIsInView(true);
          setHasAnimated(true); 
        } else if (!entry.isIntersecting) {
          setIsInView(false);

          if (prevY.current < currentY) {
            setHasAnimated(false);
          }
        }

        prevY.current = currentY;
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isInView, hasAnimated };
};

export default useInView;

import { useEffect, useState } from "react";

export function useScrollDetection(elementRef, threshold = 60) {
  const [isElementVisible, setIsElementVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isVisible = rect.bottom > threshold;
        setIsElementVisible(isVisible);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef, threshold]);

  return { isElementVisible };
}

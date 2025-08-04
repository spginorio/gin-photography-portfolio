import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      try {
        window.scrollTo(0, 0);
      } catch (error) {
        console.error('Error scrolling to top:', error);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default ScrollToTop;

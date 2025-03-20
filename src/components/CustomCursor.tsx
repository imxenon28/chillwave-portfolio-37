
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverEvents = () => {
      const handleLinkMouseEnter = () => setLinkHovered(true);
      const handleLinkMouseLeave = () => setLinkHovered(false);

      const links = document.querySelectorAll('a, button, [role="button"]');
      
      links.forEach(link => {
        link.addEventListener('mouseenter', handleLinkMouseEnter);
        link.addEventListener('mouseleave', handleLinkMouseLeave);
      });

      return () => {
        links.forEach(link => {
          link.removeEventListener('mouseenter', handleLinkMouseEnter);
          link.removeEventListener('mouseleave', handleLinkMouseLeave);
        });
      };
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    
    const cleanupLinkEvents = handleLinkHoverEvents();

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      cleanupLinkEvents();
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className={`fixed pointer-events-none z-50 rounded-full bg-lofi-primary transition-opacity duration-300 ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference'
        }}
      />
      
      {/* Cursor outer ring */}
      <div 
        className={`fixed pointer-events-none z-50 rounded-full border border-lofi-primary transition-all duration-200 ${hidden ? 'opacity-0' : 'opacity-60'} ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '40px',
          height: '40px',
          transform: 'translate(-50%, -50%)',
          transitionProperty: 'width, height, opacity, transform',
        }}
      />
    </>
  );
};

export default CustomCursor;

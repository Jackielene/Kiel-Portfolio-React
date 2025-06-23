import { useEffect } from 'react';

const TidioChat = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = '//code.tidio.co/yq5qb59yyhmp8sxdgzyrsznqr0z7vpfm.js';
    script.async = true;

    // Add custom CSS to position the widget
    const style = document.createElement('style');
    style.textContent = `
      #tidio-chat {
        left: 0 !important;
        right: auto !important;
        bottom: 100px !important;
        position: fixed !important;
        z-index: 2147483647 !important;
        cursor: grab !important;
      }
      #tidio-chat-iframe {
        left: 0 !important;
        right: auto !important;
        bottom: 100px !important;
        position: fixed !important;
        z-index: 2147483647 !important;
        cursor: grab !important;
      }
      .tidio-chat {
        left: 0 !important;
        right: auto !important;
        position: fixed !important;
        z-index: 2147483647 !important;
        cursor: grab !important;
      }
      .tidio-chat-iframe {
        left: 0 !important;
        right: auto !important;
        position: fixed !important;
        z-index: 2147483647 !important;
        cursor: grab !important;
      }
    `;
    document.head.appendChild(style);

    // Append script to body
    document.body.appendChild(script);

    // Drag logic
    const makeDraggable = () => {
      const chat = document.getElementById('tidio-chat');
      if (!chat) return;
      let isDragging = false;
      let offsetX = 0;
      let offsetY = 0;

      const onMouseDown = (e) => {
        isDragging = true;
        offsetX = e.clientX - chat.getBoundingClientRect().left;
        offsetY = e.clientY - chat.getBoundingClientRect().top;
        chat.style.transition = 'none';
        document.body.style.userSelect = 'none';
      };
      const onMouseMove = (e) => {
        if (!isDragging) return;
        chat.style.left = `${e.clientX - offsetX}px`;
        chat.style.top = `${e.clientY - offsetY}px`;
        chat.style.right = 'auto';
        chat.style.bottom = 'auto';
      };
      const onMouseUp = () => {
        isDragging = false;
        chat.style.transition = '';
        document.body.style.userSelect = '';
      };
      chat.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      // Clean up
      return () => {
        chat.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };
    };

    // Wait for Tidio to load, then make draggable
    let cleanupDrag = null;
    const interval = setInterval(() => {
      const chat = document.getElementById('tidio-chat');
      if (chat) {
        cleanupDrag = makeDraggable();
        clearInterval(interval);
      }
    }, 500);

    // Cleanup function to remove script, style, and drag listeners when component unmounts
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
      if (cleanupDrag) cleanupDrag();
      clearInterval(interval);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TidioChat; 
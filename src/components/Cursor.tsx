

const Cursor = () => {
  // const [cursorX, setCursorX] = useState(-50);
  // const [cursorY, setCursorY] = useState(-50);
  // const [isClicking, setIsClicking] = useState(false);

  // // Update cursor position
  // const moveCursor = (e) => {
  //   setCursorX(e.pageX - 20); // Adjusting for cursor size
  //   setCursorY(e.pageY - 20); // Adjusting for cursor size
  // };

  // // Track click state
  // const handleMouseDown = () => setIsClicking(true);
  // const handleMouseUp = () => setIsClicking(false);

  // useEffect(() => {
  //   document.addEventListener('mousemove', moveCursor);
  //   document.addEventListener('mousedown', handleMouseDown);
  //   document.addEventListener('mouseup', handleMouseUp);

  //   return () => {
  //     document.removeEventListener('mousemove', moveCursor);
  //     document.removeEventListener('mousedown', handleMouseDown);
  //     document.removeEventListener('mouseup', handleMouseUp);
  //   };
  // }, []);

  // return (
  //   <>
  //     <div
  //       className={`cursor ${isClicking ? 'cursor-clicked' : ''}`}
  //       style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
  //     ></div>
  //     <style jsx>{`
  //       .cursor {
  //         position: fixed;
  //         left: -50px; /* Initialize off-screen */
  //         top: -50px; /* Initialize off-screen */
  //         width: 40px;
  //         height: 40px;
  //         background-color: #ff6b6b; /* Customized cursor color */
  //         border: 2px solid #333; /* Customized cursor border */
  //         border-radius: 50%;
  //         transform: translate(-50%, -50%);
  //         pointer-events: none;
  //         z-index: 9999; /* Ensure cursor stays on top */
  //         transition: all 0.2s ease-out; /* Customized transition duration */
  //       }

  //       .cursor-clicked {
  //         transform: translate(-50%, -50%) scale(0.7); /* Customized scale on click */
  //         background-color: #9b59b6; /* Customized clicked cursor color */
  //       }

  //       body {
  //         cursor: none; /* Hide default cursor */
  //       }
  //     `}</style>
  //   </>
  // );
};

export default Cursor;

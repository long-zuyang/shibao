import { useRef, useEffect } from 'react';

function CanvasDrow() {
  const canvasRef = useRef( );



  useEffect(() => {
    console.log(document.getElementById('cvs'));


    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
  });

  return <canvas ref={canvasRef}></canvas>;
}

export default CanvasDrow;

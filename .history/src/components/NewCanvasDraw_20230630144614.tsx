import React,{useRef} from 'react';

class CanvasDraw extends React.Component {

  

  render(){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvas = canvasRef.current;
  
    return (<canvas ref={canvasRef});
  }
}

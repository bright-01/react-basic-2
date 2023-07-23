import React, {useState} from 'react';
import './AppXY.css';

export default function AppXY() {

  const [position, setPosition] = useState({x:0, y: 0});
  return (
    <div className='container' onPointerMove={(event)=>{
        setPosition((prevState)=> ({...prevState, x:event.clientX}) );
    }}>
      <div className='pointer' style={{transform:`translate(${position.x}px, ${position.y}px`}}/>
    </div>
  );
}

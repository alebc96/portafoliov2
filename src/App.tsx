import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'

function App() {

  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  window.addEventListener('mousemove', ( e ) => {
     // Obtenemos las dimensiones del div "cursor"
     const cursorDiv: any = document.querySelector('.cursor');
     if(cursorDiv !== null){
      const cursorDivWidth = cursorDiv.offsetWidth;
      const cursorDivHeight = cursorDiv.offsetHeight;
       // Calculamos las coordenadas centradas del cursor dentro del div
     const cursorXCentered = e.pageX - cursorDivWidth / 2;
     const cursorYCentered = e.pageY - cursorDivHeight / 2;
 
     setCursorX(cursorXCentered);
     setCursorY(cursorYCentered);
     }
    
 
    
  })

  return (
    <>
     <Home></Home>
     <div className="cursor"
     style={{
      left: cursorX + 'px',
      top: cursorY + 'px'
     }}
     >

     </div>
    </>
  )
}

export default App

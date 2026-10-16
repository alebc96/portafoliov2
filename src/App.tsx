import { useEffect, useRef } from 'react'
import './App.css'
import Home from './pages/home/Home'

function App() {

  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Obtenemos las dimensiones del div "cursor"
      const cursorDiv = cursorRef.current
      if (cursorDiv === null) return

      const cursorDivWidth = cursorDiv.offsetWidth
      const cursorDivHeight = cursorDiv.offsetHeight

      // clientX/clientY son coordenadas del viewport, que es lo que espera
      // position: fixed. Así el brillo se mantiene pegado al cursor al hacer scroll.
      const cursorXCentered = e.clientX - cursorDivWidth / 2
      const cursorYCentered = e.clientY - cursorDivHeight / 2

      // Actualizamos el DOM directamente para no re-renderizar en cada movimiento
      cursorDiv.style.left = cursorXCentered + 'px'
      cursorDiv.style.top = cursorYCentered + 'px'
      cursorDiv.style.opacity = '1'
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
     <Home></Home>
     <div className="cursor" ref={cursorRef}></div>
    </>
  )
}

export default App

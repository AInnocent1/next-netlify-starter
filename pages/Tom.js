import React from 'react'

function App() {
  const canvasRef = React.useRef(null)
  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={e => {        const canvas = canvasRef.current        const ctx = canvas.getContext('2d')        // implement draw on ctx here
      }}
    />
  )
}

export default App

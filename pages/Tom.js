import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Canvas from '@components/Canvas'
import React from 'react'
export default function Tom() {
  return (
      <div className="container" width="100%" height="100%">
   
      <Head>
        <title>Hello World!</title>
      </Head>

      <main>
        <Header title="Hello Conor and other world citizens!"/>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        
      </main>
     <div className="canvas">
        <canvas id="c" width="100%" height="100%"></canvas>
        </div>
    </div>
    

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

  
    )}

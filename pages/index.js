import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Canvas from '@components/Canvas'

export default function Home() {
  return (
    
    <div className="container">
    <div className="canvas">
        <canvas id="canvas" width="100%" height="100%"></canvas>
        </div>
      <Head>
        <title>Hello World!</title>
      </Head>

      <main>
        <Header title="Hello Conor and other world citizens!"/>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        
      </main>
    </div>
    
    )}

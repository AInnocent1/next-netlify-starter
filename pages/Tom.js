import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Canvas from '@components/Canvas'
import React from 'react'
export default function Home() {
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
  
    )}

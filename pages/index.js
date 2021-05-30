import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Canvas from '@components/Canvas'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hello World!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hello Conor and other world citizens!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
    <body style="background:black; width:100%; height:100%">
        <canvas id="c" style="display: block;"></canvas>
    </body>
      </main>
    </div>
  )
}

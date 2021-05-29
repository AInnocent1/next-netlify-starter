import Head from 'next/head'
import Header from '@components/Header'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hello World!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This will be a hub for TOM Activities" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}

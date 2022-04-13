import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    <p><a href="https://www.penimajor.com.tr"><img src="https://imgyukle.com/f/2022/04/13/RJdVD8.png" alt="" width="1000" height="685" /></a></p>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
<p><a href="https://www.penimajor.com.tr"><img src="https://imgyukle.com/f/2022/04/13/RJdVD8.png" alt="" width="1000" height="685" /></a></p>
      <Footer />
    </div>
  )
}

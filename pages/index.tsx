import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sentiero.digital</title>
        <meta name="description" content="Handcrafted, high quality, digital products." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <div className={'grid place-items-center min-h-screen'}>
            <div className="heading">
              <h1 className={'font-medium text-5xl mb-2'}>Sentiero digital</h1>
              <h2>Handcrafted, high quality, digital products.</h2>
              <div className="mt-8">
                <h3 className={'text-bold text-xs inline'}>Contact us on </h3>
                <a href="https://www.linkedin.com/company/sentiero-digital"
                   target="_blank" rel="noreferrer" className={'text-blue-600 hover:underline'}
                   title={'Sentiero digital on LinkedIn'}>LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

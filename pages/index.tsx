import type {NextPage} from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
      <div className="page-root min-h-screen">
        <Head>
          <title>Sentiero | Handcrafted, high quality, digital products.</title>
          <meta name="description" content="Handcrafted, high quality, digital products."/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <header className="pt-4 md:pt-10">
          <div className="container">
            <div className="md:flex flex-row gap-col justify-between items-center">
              <div className="organization">
                <img src="/images/logo.svg" height={80} width={80} alt=""/>
                <h1 className={'font-medium text-3xl hidden mb-1'}>Sentiero | Handcrafted, high quality, digital
                  products.</h1>
              </div>
            </div>
          </div>
        </header>

        <main className="my-10 md:my-16">

          <header className="mb-20">
            <div className="container">
              <div className="card --no-padding py-10 px-col">
                <div className="row">
                  <div className="col-span-12 md:col-span-8">
                    <h1 className={'text-2xl tracking-tight mb-3 md:mb-5 font-medium text-gray-900 sm:text-5xl md:text-6xl'}>
                      <span className="hidden">Sentiero</span>
                      <span>Creative<wbr/> web development</span>
                    </h1>
                  </div>
                  <div className="col-span-12 md:col-start-1 md:col-span-3 2xl:col-start-1 2xl:col-span-2">
                    <p className={'text-sm text-gray-600 md:text-lg '}>Building only beautyful products</p>
                  </div>
                  <div className="col-span-12 md:col-start-4 md:col-span-6">
                    <p className="text-sm md:text-lg ">In love with discover, test and build <u>good code</u>, <wbr/>try
                      new technologies every day using lean approach. <wbr/>Agile and clean-code centric methodology for
                      building maintainable, accessibility-first web solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="my-10">
            <div className="container">
              <h2 className="text-3xl font-medium">Our experiments</h2>
              <article className="md:row my-8">
                <div className="md:col-span-5 lg:col-span-4 ">
                  <div className="card aspect-video overflow-hidden relative --no-padding">
                    <img src={'/images/experiments/ikea-mosaic-system.png'}
                         className="object-cover object-center absolute top-0 left-0 w-full h-full"
                         width={400}
                         height={300}
                         alt={'Preview for ikea mosaic system'}
                         loading={'lazy'}
                    />
                  </div>
                  <div className={'my-2'}>
                    <a href="#" target="_blank" rel={'noreferrer'}>Demo</a> — <a href="#" target={'_blank'}
                                                                                 rel={'noreferrer'}>Check on Github</a>
                  </div>
                </div>
                <div className="col-span-8 col-start-1 lg:col-span-6 lg:col-start-5 ">
                  <h3 className="text-4xl mb-3 font-light">Ikea featured card system</h3>

                  <div className="text-sm w-3/4">
                    <p>Recreating <a href="https://www.ikea.com/it/it/" target={'_blank'}
                                     rel="noreferrer">Ikea.com</a> mosaic system, with particular focus
                      on <em>accessibility</em>.</p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>

        <footer className="py-10 container">
          <h3 className={'text-bold text-xs inline'}>Do you want to ear more? Contact us on </h3>
          <a href="https://www.linkedin.com/company/sentiero-digital"
             target="_blank" rel="noreferrer"
             title={'Sentiero.digital on LinkedIn'}>LinkedIn</a>
        </footer>
      </div>
  )
}

export default Home

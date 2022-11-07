import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import {fetchEntries} from "@/utils/apis/getPosts";
import {Project} from "@/types/project";
import {ArticleListItem} from "@/components/article-list-item/article-list-item";
import {Fragment} from "react";
import {Navigation} from "@/components/navigation";
import {Banner} from "@/components/banner";

const Home: NextPage<{ projects: Project[] }> = ({projects = []}) => {

  const PageTitle = <h1 className={'font-medium text-3xl hidden mb-1'}>Sentiero | Handcrafted, high quality, digital
    products.</h1>;

  console.log({projects})
  return (
      <div className="page-root min-h-screen">
        <Head>
          <title>Sentiero | Handcrafted, high quality, digital products.</title>
          <meta name="description" content="Handcrafted, high quality, digital products."/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <Navigation
            logoSlot={PageTitle}
        />

        <main className="my-10 md:my-16">
          <Banner/>

          <section className="my-10">
            <div className="container">

              <div className="lg:row">
                <div className="lg:col-span-3">
                  <h2 className="text-3xl font-medium lg:sticky top-10">Our experiments</h2>
                </div>

                <div className="lg:col-span-8 lg:col-start-5">
                  {projects?.map((article, index) => (
                      <Fragment key={article.slug}>
                        <ArticleListItem {...article}/>
                        <hr className="mt-3 mb-12"/>
                      </Fragment>
                  ))}
                </div>
              </div>

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

export const getStaticProps: GetStaticProps = async context => {
  const projects = await fetchEntries();
  return {props: {projects}};
}

export default Home

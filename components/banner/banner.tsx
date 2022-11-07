import {VFC} from "react";

export const Banner: VFC<{}> = props => {
  return <header className="mb-20">
    <div className="container">
      <div className="card --no-padding py-10 px-col">
        <div className="row">
          <div className="col-span-12 md:col-span-8">
            <h2 className={'text-2xl tracking-tight mb-3 md:mb-5 font-medium text-gray-900 sm:text-5xl md:text-6xl'}>
              <span className="hidden">Sentiero the</span>
              <span>Creative<wbr/> web development studio</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-start-1 md:col-span-3 2xl:col-start-1 2xl:col-span-2">
            <p className={'text-sm text-gray-600 md:text-lg '}>Building only beautyful products</p>
          </div>
          <div className="col-span-12 md:col-start-4 md:col-span-6">
            <p className="text-sm md:text-lg ">In love with discovering, testing and building <u>good
              code</u>, <wbr/>trying new technologies every day using lean approach. <wbr/>Agile and clean-code centric
              methodology for building maintainable, accessibility-first web solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
}
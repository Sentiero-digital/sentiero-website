import type { FC, PropsWithChildren } from 'react'
import { Link, NavLink } from '@remix-run/react'

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className='py-4'>
      <div className='container'>
        <div className='md:flex flex-row gap-col justify-between items-center'>
          <Link className='organization no-arrow'
                to={`/`}>
            <img src='/images/logo.svg' height={80} width={80} alt='' />
            {children}
          </Link>
          <nav>
            <ul className={'flex flex-row gap-x-3'}
                role={'menu'}>
              <li role={'menuitem'}
              ><NavLink to={'/experiments'}
                        title={'discover our last experiments'}
              >Experiments</NavLink></li>
              <li role={'menuitem'}
              ><NavLink to={'/articles'}
                        title={'learn about web development'}>Articles</NavLink></li>
              <li role={'menuitem'}
              ><a href={'https://www.linkedin.com/company/sentiero-digital/'}
                  rel={'noopener noreferrer'}
                  target={'_blank'}
                  title={'Sentiero Digital on LinkedIn'}
              >LinkedIn</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
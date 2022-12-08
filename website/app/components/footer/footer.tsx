import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className='py-10 container'>
      <h3 className={'text-bold text-xs inline'}>Do you want to ear more? Contact us on </h3>
      <a href='https://www.linkedin.com/company/sentiero-digital'
         target='_blank' rel='noreferrer'
         title={'Sentiero.digital on LinkedIn'}>LinkedIn</a>
    </footer>
  )
}
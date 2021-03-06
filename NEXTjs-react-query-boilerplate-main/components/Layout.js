import Navigation from './Navigation'
import Head from 'next/head'
import Canvas from './Canvas'
import { FaBars } from 'react-icons/fa'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>NEXT.js Boilerplate</title>
        <meta property='og:title' content='NEXT.js Boilerplate' key='title' />
      </Head>
      <Navigation />
      <Canvas />
      <div className='container'>{children}</div>
    </>
  )
}

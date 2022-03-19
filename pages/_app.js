import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
        <link rel='preload' href='/fonts/Universo/universo-regular.otf' as='font' crossOrigin='' type='font/otf'/>
        <link rel='preload' href='/fonts/Universo/universo-bold.otf' as='font' crossOrigin='' type='font/otf'/>
        <link rel='preload' href='/fonts/Universo/universo-black.otf' as='font' crossOrigin='' type='font/otf'/>
        <link rel='preload' href='/fonts/Universo/universo-light.otf' as='font' crossOrigin='' type='font/otf'/>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Joaquin's Portfolio</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp

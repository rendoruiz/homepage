import Head from 'next/head'

import SiteLayout from '../components/SiteLayout'
import Spotlight from '../components/Spotlight/Spotlight'
import Portfolio from '../components/Portfolio/Portfolio'
import Contact from '../components/Contact/Contact'

export default function Home() {
  return (
    <SiteLayout>
      <Head>
        <title>Rendo Ruiz</title>
        <meta name="description" content="Rendo's portfolio site." />
        <meta property="og:title" content="Rendo Ruiz" />
        <meta property="og:description" content="Rendo's portfolio site." />
        <meta property="og:url" content="https://rendo.ca/" />
      </Head>

      {/* landing section */}
      <Spotlight />

      {/* portfolio section */}
      <Portfolio />

      {/* contact form section */}
      <Contact />
    </SiteLayout>
  )
}

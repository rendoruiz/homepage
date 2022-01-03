import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import { scroller } from 'react-scroll'

import SiteLayout from '../components/SiteLayout'
import Contact from '../components/Contact/Contact'
import Portfolio from '../components/Portfolio/Portfolio'

export default function Home() {
  const router = useRouter();

  const anchorScroll = (id) => {
    const scrollDuration = 800;

    // scroll to element
    scroller.scrollTo(id, { 
      duration: scrollDuration, 
      delay: 0, 
      smooth: 'easeInOutCubic' 
    });

    // change route after scrolling
    setTimeout(() => {
      router.push(`/#${id}`, undefined, { shallow: true });
    }, scrollDuration);
  }

  return (
    <SiteLayout>
      <Head>
        <title>Rendo Ruiz</title>
        <meta name="description" content="Rendo's portfolio site." />
        <meta property="og:title" content="Rendo Ruiz" />
        <meta property="og:description" content="Rendo's portfolio site." />
        <meta property="og:url" content="https://rendo.ca/" />
      </Head>

      <section className="px-5">
        <div className="mx-auto max-w-screen-sm w-full py-20">
          <h1 className="text-4xl font-bold text-gray-900">Hello, I'm Rendo.</h1>
          <span className="text-gray-500 text-xl font-bold">Web Developer</span>
          <p className="mt-7 leading-7">
            I am a recent graduate from NAIT under the Digital Media & IT program in the Computer Software Development concentration. I enjoy working on front-end web development and have experience building sites using React.js, Next.js, Create React App, Tailwind CSS, HTML, CSS, and JavaScript.
          </p>
          <p className="mt-5 leading-7">
            Scroll down to check out <span className="anchorlink" onClick={() => anchorScroll("portfolio")}>my portfolio</span>, and feel free to <span className="anchorlink" onClick={() => anchorScroll("contact")}>leave a message</span> on the contact form further below.
          </p>
        </div>
      </section>

      {/* portfolio section */}
      <Portfolio />

      {/* contact form section */}
      <Contact />
    </SiteLayout>
  )
}

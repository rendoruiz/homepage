import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import { scroller } from 'react-scroll'

import MainLayout from '../components/MainLayout'
import ContactForm from '../components/ContactForm'

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
    <MainLayout>
      <Head>
        <title>Rendo Ruiz</title>
        <meta property="og:title" content="Rendo Ruiz"></meta>
      </Head>

      <section className="px-5">
        <div className="mx-auto max-w-3xl w-full py-20">
          <h1 className="text-4xl font-bold text-gray-900">Hello, I'm Rendo</h1>
          <span className="text-gray-500 text-xl font-bold">Web Developer</span>
          <p className="mt-7 leading-7">
            I am recent graduate from NAIT under the Digital Media & IT progam on the Computer Software Development concentration. I enjoy working on front-end development and have experience building sites using React.js, Next.js, Create React App, tailwindcss, HTML, CSS, and JavaScript.
          </p>
          <p className="mt-5 leading-7">
            Scroll down to check out <span className="anchorlink" onClick={() => anchorScroll("portfolio")}>my portfolio</span> and feel free to <span className="anchorlink" onClick={() => anchorScroll("contact")}>leave a message</span> on the contact form further below.
          </p>
        </div>
      </section>

      <section id="portfolio" className="px-5 bg-primary text-white bg-opacity-70">
        <div className="mx-auto max-w-3xl w-full py-20">
          <h2 className="text-4xl font-bold">My portfolio.</h2>
          <div className="mt-7 md:mt-5 grid md:grid-cols-2 gap-7 md:gap-5">
            <div className="card">
              <img src="" alt="" className="bg-gray-100 h-44" />
              <div className="card-description">
                <h3 className="text-xl font-bold mb-2">Alberta Drone Specialists</h3>
                <p>
                  My first work project with <a href="https://bridgeittech.ca/">BridgeIT Tech</a>. The site is built using Next.js' Static Site Generation (SSG). This is the first project I used Next.js and CSS Modules on that spans multiple pages.
                </p>
                <div className="flex mt-5 self-end text-sm">
                  <a 
                    href="https://abdronespecialists.ca/" 
                    rel="noreferrer"
                    target="_blank"
                    className="button"
                  >
                    View Site
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="" alt="" className="bg-gray-100 h-44" />
              <div className="card-description">
                <h3 className="text-xl font-bold mb-2">HackerNews Viewer</h3>
                <p>
                  My first personal project using React.js and Create React App library. The site uses HackerNews's free API for content and mimics Reddit's new design for layout. The site is hosted on Netlify with CI/CD enabled.
                </p>
                <div className="flex mt-5 self-end text-sm">
                  <a 
                    href="https://hn.rendo.ca/" 
                    rel="noreferrer"
                    target="_blank"
                    className="button"
                  >
                    View Site
                  </a>
                  <a 
                    href="https://github.com/rendoruiz/reactjs-hackernews" 
                    rel="noreferrer"
                    target="_blank"
                    className="ml-2 button"
                  >
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5">
        <div className="mx-auto max-w-3xl w-full py-20">
          <h2 className="text-4xl font-bold mb-5">Leave a message.</h2>
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  )
}

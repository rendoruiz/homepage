import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-primary tracking-wide select-none">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-5">
        <div className="mx-auto max-w-3xl w-full flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a className="border-2 rounded leading-none text-2xl font-bold font-mono w-8 h-8 grid place-items-center text-gray-800 border-gray-800 hover:bg-primary hover:border-primary hover:text-gray-100 transition-colors">r</a>
            </Link>
            <span className="ml-3 text-2xl font-bold mb-[-2px]">rendo.ca</span>
          </div>

          <ul className="flex">
            <li>
              <a 
                href="https://www.linkedin.com/in/rendo-ruiz"
                title="LinkedIn link"
                className="text-2xl hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/rendoruiz"
                title="GitHub link"
                className="text-2xl hover:text-primary transition-colors ml-6"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section className="px-5 bg-white">
          <div className="mx-auto max-w-3xl w-full py-14">
            <h1 className="text-4xl font-bold text-gray-900">Hello, I'm Rendo</h1>
            <span className="text-gray-500 text-xl font-bold">A web developer.</span>
            <p className="mt-7 max-w-prose leading-7">
              I recently graduated from NAIT under the Digital Media & IT progam on the Computer Software Development concentration. I enjoy working on front-end development and have experience building sites using React.js, Next.js, create-react-app, tailwindcss, HTML, CSS, and JavaScript.
            </p>
            <p className="mt-5 max-w-prose leading-7">
              Scroll down to check out my <span className="anchorlink">portfolio</span> and feel free to leave a message on the <span className="anchorlink">contact form</span> further below.
            </p>
          </div>
        </section>

        <section className="px-5">
          <div className="mx-auto max-w-3xl w-full py-14">
            <h2 className="text-3xl">Portfolio</h2>
          </div>
        </section>

        <section className="px-5 bg-white">
          <div className="mx-auto max-w-3xl w-full py-14">
            <h2 className="text-3xl">Leave a message</h2>
          </div>
        </section>
      </main>

      <footer className="p-5 text-sm text-gray-500 text-center">
        <ul className="mb-2 flex justify-center">
          <li>
            <a 
              href="https://www.linkedin.com/in/rendo-ruiz"
              title="LinkedIn link"
              className="text-xl hover:text-primary transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/rendoruiz"
              title="GitHub link"
              className="text-xl hover:text-primary transition-colors ml-6"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
        <p>Made with Next.js and tailwindcss with ♥</p>
        <p>&copy; 2021 Rendo Ruiz</p>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const MainLayout = ({ children }) => {
  return ( 
    <div className="mainlayout">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <header className="p-5">
        <div className="mx-auto max-w-3xl w-full flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a className="border-2 rounded leading-none text-2xl font-bold font-mono w-8 h-8 grid place-items-center text-gray-800 border-gray-800 hover:bg-primary hover:border-primary hover:text-gray-100 transition-colors">r</a>
            </Link>
            <Link href="/">
              <a className="ml-3 text-2xl font-bold mb-[-2px] hover:text-primary transition-colors">rendo.ca</a>
            </Link>
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

      <main className="bg-white">
        { children }
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
  );
}
 
export default MainLayout;
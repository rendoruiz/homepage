import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SiteLayout = ({ children }) => {
  return ( 
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-gray-100 font-primary text-gray-800 tracking-wide select-none">
      <header className="p-5">
        <div className="flex justify-between items-center mx-auto w-full max-w-screen-sm">
          <Link href="/">
            <a 
              title="homepage link"
              className="group flex items-center" 
            >
              <div className="grid place-items-center border-2 border-gray-800 rounded-md w-8 h-8 font-mono font-bold text-2xl text-gray-800 leading-none transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-gray-100">
                r
              </div>
              <h1 className="ml-3 mb-[-2px] font-bold text-2xl transition-colors group-hover:text-primary">
                rendo
              </h1>
            </a>
          </Link>

          <ul className="flex">
            <li>
              <a 
                href="https://www.linkedin.com/in/rendo-ruiz"
                title="LinkedIn page link"
                className="text-2xl transition-colors hover:text-primary"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/rendoruiz"
                title="GitHub page link"
                className="ml-6 transition-colors text-2xl hover:text-primary"
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
        <ul className="flex justify-center mb-2">
          <li>
            <a 
              href="https://www.linkedin.com/in/rendo-ruiz"
              title="LinkedIn page link"
              className="text-xl transition-colors hover:text-primary"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/rendoruiz"
              title="GitHub page link"
              className="ml-6 text-xl transition-colors hover:text-primary"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
        <p>Made with Next.js and Tailwind CSS with ♥</p>
        <p>&copy; 2021 Rendo Ruiz</p>
      </footer>
    </div>
  );
}
 
export default SiteLayout;
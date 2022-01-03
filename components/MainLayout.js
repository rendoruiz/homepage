import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const MainLayout = ({ children }) => {
  return ( 
    <div className="min-h-screen bg-gray-100 text-gray-800 font-primary tracking-wide select-none grid grid-rows-[auto,1fr,auto]">
      <header className="p-5">
        <div className="mx-auto max-w-3xl w-full flex items-center justify-between">
          <Link href="/">
            <a 
              title="homepage link"
              className="flex items-center group" 
            >
              <span className="border-2 rounded leading-none text-2xl font-bold font-mono w-8 h-8 grid place-items-center text-gray-800 border-gray-800 group-hover:bg-primary group-hover:border-primary group-hover:text-gray-100 transition-colors">r</span>
              <span className="ml-3 text-2xl font-bold mb-[-2px] group-hover:text-primary transition-colors">rendo.ca</span>
            </a>
          </Link>

          <ul className="flex">
            <li>
              <a 
                href="https://www.linkedin.com/in/rendo-ruiz"
                title="LinkedIn page link"
                className="text-2xl hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/rendoruiz"
                title="GitHub page link"
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
              title="LinkedIn page link"
              className="text-xl hover:text-primary transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/rendoruiz"
              title="GitHub page link"
              className="text-xl hover:text-primary transition-colors ml-6"
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
 
export default MainLayout;
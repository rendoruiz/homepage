import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SiteHeader = () => {
  return (  
    <header className="p-5">
      <div className="flex justify-between items-center mx-auto w-full max-w-screen-sm">
        <Link href="/">
          <a 
            title="homepage link"
            className="group flex items-center" 
          >
            <div className="grid place-items-center border-2 border-gray-800 rounded-md w-8 h-8 font-mono font-bold text-2xl text-gray-800 leading-none transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-gray-100 dark:border-gray-100 dark:text-gray-100 dark:group-hover:text-gray-800">
              r
            </div>
            <span className="ml-3 mb-[-2px] font-bold text-2xl transition-colors group-hover:text-primary">
              rendo
            </span>
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
  );
}
 
export default SiteHeader;
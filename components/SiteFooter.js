import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SiteFooter = () => {
  return (  
    <footer className="p-5 text-sm text-gray-500 text-center dark:text-gray-300">
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
      <p>&copy; 2022 Rendo Ruiz</p>
    </footer>
  );
}
 
export default SiteFooter;
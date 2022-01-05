import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const PortfolioItemLink = ({ link, title, displayText }) => {
  return (  
    <a 
      href={link}
      title={title}
      rel="noreferrer"
      target="_blank"
      className="flex items-center justify-center border-2 border-primary/90 rounded-full px-3 py-[0.375rem] text-gray-800 text-center transition only:basis-full hover:bg-primary/90 hover:text-slate-100 active:opacity-80 sm:px-4 sm:only:basis-auto dark:text-gray-100"
    >
      <FontAwesomeIcon icon={faGithub} />
      <span
        className="ml-[0.375rem] font-bold text-sm tracking-wide leading-none uppercase"
      >
        { displayText }
      </span>
    </a>
  );
}
 
export default PortfolioItemLink;
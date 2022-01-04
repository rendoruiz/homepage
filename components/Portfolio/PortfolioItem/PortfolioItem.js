import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioItem = ({ link, imagePreview, title, children }) => {
  return (  
    <div className="grid rounded-md overflow-hidden">
      {/* image preview */}
      <a 
        href={link}
        title={title + " project link"}
        rel="noreferrer"
        target="_blank"
        className="relative grid h-48 overflow-hidden cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-70"
      >
        <img 
          src={imagePreview} 
          alt={"image preview of " + title} 
          className="w-full h-full bg-gray-200 object-cover object-top" 
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-2 bg-black/60 backdrop-blur-sm">
          <h4 className="font-bold text-lg text-gray-100 tracking-wide">
            { title }
          </h4>
          <FontAwesomeIcon 
            icon={faExternalLinkAlt} 
            className="ml-2" 
          />
        </div>
      </a>

      {/* description & links */}
      { children && (
        <div className="grid gap-2 p-2 bg-gray-100 text-gray-800">
          <div className="flex flex-wrap">
            { children }
          </div>
        </div>
      )}
    </div>
  );
}
 
export default PortfolioItem;
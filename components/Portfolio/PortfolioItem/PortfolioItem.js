import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const PortfolioItem = ({ link, imagePreview, title, children }) => {
  return (  
    <div className="grid grid-rows-[auto,1fr] rounded-md overflow-hidden transition duration-200 hover:shadow-lg">
      {/* image preview */}
      <a 
        href={link}
        title={title + " project link"}
        rel="noreferrer"
        target="_blank"
        className="group relative grid h-48 overflow-hidden cursor-pointer"
      >
        <img 
          src={imagePreview} 
          alt={"image preview of " + title} 
          className="w-full h-full bg-gray-200 object-cover object-top" 
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-200 group-hover:opacity-30 group-active:opacity-50" />
        {/* title */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-3 py-2 bg-black/60 backdrop-blur-sm">
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
        <div className="grid content-between p-3 bg-gray-100 text-gray-800">
          { children }
        </div>
      )}
    </div>
  );
}
 
export default PortfolioItem;
const PortfolioItemLink = ({ link, title, displayText }) => {
  return (  
    <a 
      href={link}
      title={title}
      rel="noreferrer"
      target="_blank"
      className="border-2 border-primary rounded-full px-3 py-1 text-center only:basis-full"
    >
      <span
        className="font-bold text-sm text-gray-800 tracking-wider leading-none uppercase"
      >
        { displayText }
      </span>
    </a>
  );
}
 
export default PortfolioItemLink;
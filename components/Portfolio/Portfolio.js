import PortfolioItem from "./PortfolioItem/PortfolioItem";
import PortfolioItemLink from "./PortfolioItem/PortfolioItemLink";

const Portfolio = () => {
  return (  
    <section 
      id="portfolio" 
      className="px-5 pt-20 pb-24 bg-primary/70 text-white"
    >
      <div className="mx-auto max-w-screen-sm w-full">
        <h2 className="text-4xl font-bold mb-7 md:mb-6">
          My portfolio.
        </h2>

        {/* external projects */}
        <div className="grid gap-4 sm:grid-cols-2">
          <h3 className="font-bold text-2xl sm:col-span-2">
            Projects I've worked on
          </h3>

          <PortfolioItem 
            link="https://bridgeittech.ca/"
            imagePreview="/images/ss-abs.jpg"
            title="BridgeIT Tech"
          >
          </PortfolioItem>

          <PortfolioItem 
            link="https://abdronespecialists.ca/"
            imagePreview="/images/ss-abs.jpg"
            title="Alberta Drone Specialists"
          >
          </PortfolioItem>
        </div>

        {/* personal projects */}
        <div className="grid gap-4 mt-8 sm:grid-cols-2">
          <h3 className="font-bold text-2xl sm:col-span-2">
            Personal projects
          </h3>

          <PortfolioItem 
            link="https://bridgeittech.ca/"
            imagePreview="/images/ss-abs.jpg"
            title="Hacker News Viewer (Next.js)"
          >
          </PortfolioItem>

          <PortfolioItem 
            link="https://abdronespecialists.ca/"
            imagePreview="/images/ss-abs.jpg"
            title="Hacker News Viewer (CRA)"
          >
          </PortfolioItem>
        </div>
      </div>
    </section>
  );
}
 
export default Portfolio;
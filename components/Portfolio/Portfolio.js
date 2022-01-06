import PortfolioItem from "./PortfolioItem/PortfolioItem";
import PortfolioItemLink from "./PortfolioItem/PortfolioItemLink";

const Portfolio = () => {
  return (  
    <section 
      id="portfolio" 
      className="px-5 pt-20 pb-24 bg-primary/70 text-white dark:bg-primary/25"
    >
      <div className="mx-auto max-w-screen-sm w-full">
        <h2 className="text-4xl font-bold mb-5 sm:mb-7">
          My portfolio.
        </h2>

        {/* external projects */}
        <div className="grid gap-5 sm:grid-cols-2">
          <h3 className="font-bold text-2xl sm:col-span-2 sm:-mb-1">
            Projects I've worked on
          </h3>

          <PortfolioItem 
            link="https://bridgeittech.ca/"
            imagePreview="/images/pv-bridgeit.jpg"
            title="BridgeIT Tech"
          >
          </PortfolioItem>

          <PortfolioItem 
            link="https://abdronespecialists.ca/"
            imagePreview="/images/pv-abdrones.jpg"
            title="Alberta Drone Specialists"
          >
          </PortfolioItem>
        </div>

        {/* personal projects */}
        <div className="grid gap-5 mt-8 sm:grid-cols-2">
          <h3 className="font-bold text-2xl sm:col-span-2 sm:-mb-1">
            Personal projects
          </h3>

          <PortfolioItem 
            link="https://hn.rendo.me/"
            imagePreview="/images/pv-hnnextjs-type1.png"
            title="Hacker News Viewer (Next.js)"
          >
            <p className="text-sm">
              New viewer made with different libraries from the first iteration. Follows Reddit's UI/UX more closely and comes with dark mode support.
            </p>
            <div className="grid mt-3">
              <span className="font-bold text-xs text-gray-500 tracking-widest uppercase dark:text-gray-400">
                Project Links
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                <PortfolioItemLink 
                  link="https://github.com/rendoruiz/nextjs-hackernews"
                  title="Hacker News Viewer (Next.js)"
                  displayText="GitHub"
                />
              </div>
            </div>
          </PortfolioItem>

          <PortfolioItem 
            link="https://cra.hn.rendo.me/"
            imagePreview="/images/pv-hncra.png"
            title="Hacker News Viewer (CRA)"
          >
            <p className="text-sm">
              My first attempt at a Hacker News viewer web app and also my first React project. Loosely imitates Reddit's desktop layout. Made with Create React App.
            </p>
            <div className="grid mt-3">
              <span className="font-bold text-xs text-gray-500 tracking-widest uppercase dark:text-gray-400">
                Project Links
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                <PortfolioItemLink 
                  link="https://github.com/rendoruiz/reactjs-hackernews"
                  title="Hacker News Viewer (CRA)"
                  displayText="GitHub"
                />
              </div>
            </div>
          </PortfolioItem>
        </div>
      </div>
    </section>
  );
}
 
export default Portfolio;
const Portfolio = () => {
  return (  
    <section 
      id="portfolio" 
      className="px-5 bg-primary/70 text-white"
    >
      <div className="mx-auto max-w-screen-sm w-full pt-20 pb-24">
        <h2 className="text-4xl font-bold mb-7 md:mb-6">My portfolio.</h2>
        <div className="grid md:grid-cols-2 gap-7 md:gap-5">
          <div className="card">
            <img 
              src="/images/ss-abs.jpg" 
              alt="screenshot of Alberta Drone Specialists homepage" 
              className="bg-gray-200 w-full h-48 object-cover" 
            />
            <div className="card-description">
              <h3 className="text-xl font-bold mb-2">Alberta Drone Specialists</h3>
              <p>
                The website for Alberta Drone Specialists is my first work project on <a href="https://bridgeittech.ca/">BridgeIT Tech Solutions</a>. This website is the first project I used Next.js on using its Static Site Generation (SSG) feature and CSS Modules.
              </p>
              <div className="flex mt-5 self-end text-sm">
                <a 
                  href="https://abdronespecialists.ca/" 
                  title="Alberta Drone Specialists project live site"
                  rel="noreferrer"
                  target="_blank"
                  className="button"
                >
                  View Site
                </a>
                <a 
                  href="https://abdrones.pv.rendo.ca/" 
                  title="static mirror of the site with server requests disabled"
                  rel="noreferrer"
                  target="_blank"
                  className="button"
                >
                  Static Mirror
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img 
              src="/images/ss-hn.jpg" 
              alt="screenshot of hn.rendo.ca homepage" 
              className="bg-gray-100 w-full h-48 object-cover" 
            />
            <div className="card-description">
              <h3 className="text-xl font-bold mb-2">Hacker News Viewer</h3>
              <p>
                This Hacker News viewer is my first personal project using React.js and Create React App library. The site uses HackerNews's free API for content and mimics Reddit's new design for layout. I used Netlify for its hosting with CI/CD enabled.
              </p>
              <div className="flex mt-5 self-end text-sm">
                <a 
                  href="https://hn.rendo.ca/" 
                  title="Hacker News Viewer project live site"
                  rel="noreferrer"
                  target="_blank"
                  className="button"
                >
                  View Site
                </a>
                <a 
                  href="https://github.com/rendoruiz/reactjs-hackernews" 
                  title="Hacker News Viewer project GitHub repository"
                  rel="noreferrer"
                  target="_blank"
                  className="button"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Portfolio;
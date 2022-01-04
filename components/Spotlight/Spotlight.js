import { useRouter } from "next/router";
import { scroller } from 'react-scroll'

const Spotlight = () => {
  return (  
    <section className="px-5">
      <div className="mx-auto max-w-screen-sm w-full py-20">
        <h1 className="text-4xl font-bold text-gray-900">
          Hello, I'm Rendo.
        </h1>
        <p className="text-gray-500 text-xl font-bold">
          I do front-end stuff.
        </p>
          
        <div className="grid gap-4 mt-7 leading-loose">
          <p>
            I am the front-end developer lead at BridgeIT Tech Solutions. I graduated last year from NAIT under the Digital Media & IT program in the Computer Software Development concentration. I enjoy working on front-end and also on the back-end when needed.
          </p>
          <p>
            My current toolset and techstack includes: HTML, CSS, JavaScript, PHP, Tailwind CSS, Laravel, Alpine.js, React, Next.js, Git, GitHub, Visual Studio Code.
          </p>

          <p>
            <span>Scroll down for </span>
            <ScrollTrigger 
              anchor="portfolio"
              displayText="my portfolio"
            />,
            <br />
            <span>and a little bit more for </span>
            <ScrollTrigger 
              anchor="contact"
              displayText="my contact"
            />.
          </p>
        </div>
      </div>
    </section>
  );
}

const ScrollTrigger = ({ anchor, displayText }) => {
  const router = useRouter();

  const scrollToAnchor = (id) => {
    const scrollDuration = 800;

    // scroll to element
    scroller.scrollTo(id, { 
      duration: scrollDuration, 
      delay: 0, 
      smooth: 'easeInOutCubic' 
    });

    // change route after scrolling
    setTimeout(() => {
      router.push(`/#${id}`, undefined, { shallow: true });
    }, scrollDuration);
  }

  return (
    <span
      className="font-bold text-primary cursor-pointer" 
      onClick={() => scrollToAnchor(anchor)}
    >
      { displayText }
    </span>
  );
}
 
export default Spotlight;
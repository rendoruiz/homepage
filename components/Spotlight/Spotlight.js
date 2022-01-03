import { useRouter } from "next/router";
import { scroller } from 'react-scroll'

const Spotlight = () => {
  const router = useRouter();

  const anchorScrollToView = (id) => {
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
    <section className="px-5">
      <div className="mx-auto max-w-screen-sm w-full py-20">
        <h1 className="text-4xl font-bold text-gray-900">Hello, I'm Rendo.</h1>
        <span className="text-gray-500 text-xl font-bold">Web Developer</span>
        <p className="mt-7 leading-7">
          I am a recent graduate from NAIT under the Digital Media & IT program in the Computer Software Development concentration. I enjoy working on front-end web development and have experience building sites using React.js, Next.js, Create React App, Tailwind CSS, HTML, CSS, and JavaScript.
        </p>
        <p className="mt-5 leading-7">
          Scroll down to check out <span className="anchorlink" onClick={() => anchorScrollToView("portfolio")}>my portfolio</span>, and feel free to <span className="anchorlink" onClick={() => anchorScrollToView("contact")}>leave a message</span> on the contact form further below.
        </p>
      </div>
    </section>
  );
}
 
export default Spotlight;
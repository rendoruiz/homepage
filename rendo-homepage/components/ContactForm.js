import axios from 'axios'
import clsx from 'clsx'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const ContactForm = () => {
  const [highlightInvalidFields, setHighlightInvalidFields] = useState(false);
  const [captchaHint, setCaptchaHint] = useState(null);
  const router = useRouter();

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    if (name.length <= 0 || email.length <= 0 || message.length <= 0) {
      setHighlightInvalidFields(true);
    }
    else {
      let captchaResponse = null;

      try {
        captchaResponse = grecaptcha.getResponse();

        if (captchaResponse) {
          const encodedBody = encode({
            'form-name': 'contactform',
            "name": name,
            "email": email,
            "message": message,
            "g-recaptcha-response": captchaResponse
          });
          const axiosHeader = { header: { "Content-Type": "application/x-www-form-urlencoded" } };
    
          axios.post('/', encodedBody, axiosHeader)
            .then((response) => {
              // alert('Message has been sent.');
              // console.log(response);
              router.push('/contactsuccess');
            })
            .catch((error) => {
              // alert('An error has occured.');
              // console.error(error);
              router.push('/contacterror');
            });
        } 
        else {
          setCaptchaHint('Captcha is required.');
        }
      } catch(error) {
        // console.error(error);
        setCaptchaHint('Captcha unavailable.');
      }
      
      
    }
  }

  const refreshCaptcha = () => {
    if (window.grecaptcha) {
      try {
        window.grecaptcha.reset();
        setCaptchaHint(null);
      } catch (error) {
        // console.error(error);
        setCaptchaHint('Captcha unavailable.')
      }
    }
  }

  useEffect(() => {

  }, [captchaHint]);

  return ( 
    <>
      <Head>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </Head>

      <form 
        onSubmit={handleSubmit}
        name="contactform" 
        method="POST" 
        netlify-honeypot="honeyjar"
        data-netlify="true" 
        className={clsx("grid content-start", {"display-invalid" : highlightInvalidFields})}
      >
        <input 
          type="hidden" 
          name="form-name"
          value="contactform" 
        />

        <div className="hidden">
          <label>
            <input 
              type="text" 
              name="honeyjar" 
            />
          </label>
        </div>

        <div className="grid mb-3">
          <label 
            htmlFor="name" 
            className="font-bold mb-1">
            Name
          </label>
          <input 
            type="text" 
            id="name"
            name="name" 
            placeholder="Name"
            required
            autoComplete="off"
            className="input"
          />
          <span className="input-hint">Name is required.</span>
        </div>

        <div className="grid mb-3">
          <label 
            htmlFor="email"
            className="font-bold mb-1"
          >
            Email
          </label>
          <input 
            type="email" 
            id="email"
            name="email" 
            placeholder="Email"
            required
            autoComplete="email"
            className="input"
          />
          <span className="input-hint">Valid email is required.</span>
        </div>

        <div className="grid mb-3">
          <label 
            htmlFor="message" 
            className="font-bold mb-1"
          >
            Message
          </label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Message"
            required
            className="input min-h-[100px] max-h-[300px]"
          />
          <span className="input-hint">Message is required.</span>
        </div>

        <div className="grid mb-8">
          <span className="font-bold mb-1">Captcha</span>
          <div className="relative w-full overflow-auto h-[60px] mobile-xl:h-full">
            <div className="g-recaptcha absolute transform scale-[0.75] origin-top-left mobile-xl:static mobile-xl:scale-100" data-sitekey={process.env.SITE_RECAPTCHA_KEY}></div>
          </div>
          
          { captchaHint && <span className="text-xs text-red-500">{captchaHint}</span> }
          <p 
            onClick={refreshCaptcha}
            className="mt-1 text-xs text-primary cursor-pointer"
          >
            Not loading? Click here to refresh.
          </p>
        </div>

        <button 
          type="submit"
          className="button w-40 justify-self-center"
        >
          Send
        </button>
      </form>
    </>
  );
}
 
export default ContactForm;
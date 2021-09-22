import { useRouter } from 'next/dist/client/router'
import { useRef, useState } from 'react'
import axios from 'axios'
import clsx from 'clsx'
import Reaptcha from 'reaptcha'

const ContactForm = () => {
  const [highlightInvalidFields, setHighlightInvalidFields] = useState(false);
  const [captchaHint, setCaptchaHint] = useState(null);
  const [captchaResponse, setCaptchaResponse] = useState(null);
  const captchaRef = useRef();
  const router = useRouter();
  const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

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
            router.push('/contactsuccess');
          })
          .catch((error) => {
            router.push('/contacterror');
          });
      } 
      else {
        captchaRef.current.reset();
        setCaptchaHint('Captcha is required.');
      }
    }
  }

  const refreshCaptcha = () => {
    captchaRef.current.reset();
    setCaptchaHint(null);
  }

  return ( 
    <>
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
            <div className="absolute transform scale-[0.75] origin-top-left mobile-xl:static mobile-xl:scale-100">
              <Reaptcha
                sitekey={captchaKey}
                onVerify={(token) => setCaptchaResponse(token)}
                onError={() => setCaptchaHint('Captcha Unavailable.')}
                ref={captchaRef}
              />
            </div>
          </div>
          
          { captchaHint && <span className="text-xs text-red-500">{captchaHint}</span> }
          <p 
            onClick={refreshCaptcha}
            className="mt-1 text-xs text-primary cursor-pointer justify-self-start border-transparent border-b-2 transition-colors hover:border-primary"
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
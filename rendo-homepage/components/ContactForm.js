import { useEffect } from "react";

const ContactForm = () => {
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const captchaResponse = grecaptcha.getResponse();
    if (captchaResponse) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "name": event.target.name.value,
          "email": event.target.email.value,
          "message": event.target.message.value,
          "g-recaptcha-response": captchaResponse
        })
      }).then(() => alert('success')).catch(error => alert(error))
    } 
    else {
      alert('Complete captcha before sending.')
    }
  }

  useEffect(() => {
    if (window.grecaptcha) {
      grecaptcha.reset();
    }
  }, [])

  return ( 
    <form 
      onSubmit={handleSubmit}
      name="contact" 
      method="POST" 
      netlify-honeypot="honeyjar"
      data-netlify="true" 
      className="grid content-start"
    >
      <input 
        type="hidden" 
        name="form-name"
        value="contact" 
      />

      <div className="hidden">
        <label>
          <input 
            type="text" 
            name="honeyjar" 
          />
        </label>
      </div>

      <div className="grid mb-5">
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
          className="p-2 border-b-2 border-primary rounded bg-gray-100 bg-opacity-50"
        />
      </div>

      <div className="grid mb-5">
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
          className="p-2 border-b-2 border-primary rounded bg-gray-100 bg-opacity-50"
        />
      </div>

      <div className="grid mb-5">
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
          className="p-2 border-b-2 border-primary rounded bg-gray-100 bg-opacity-50 min-h-[100px] max-h-[300px]"
        />
      </div>

      <div className="grid mb-8">
        <span className="font-bold mb-1">Captcha</span>
        <div className="g-recaptcha" data-sitekey={process.env.SITE_RECAPTCHA_KEY}></div>
      </div>

      <button 
        type="submit"
        className="button w-40 justify-self-center"
      >
        Send
      </button>
    </form>
  );
}
 
export default ContactForm;
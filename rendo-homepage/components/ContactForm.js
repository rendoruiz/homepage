const ContactForm = () => {
  return ( 
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true" 
      netlify-honeypot="honeyjar"
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

      <div className="grid mb-8">
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
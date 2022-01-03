import ContactForm from "./ContactForm";

const Contact = () => {
  return (  
    <section 
      id="contact" 
      className="px-5"
    >
      <div className="mx-auto py-20 w-full max-w-screen-sm">
        <h2 className="mb-7 font-bold text-4xl">
          Leave a message.
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
 
export default Contact;
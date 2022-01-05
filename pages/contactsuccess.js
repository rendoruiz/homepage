import ContactResponseLayout from '../components/Contact/ContactResponseLayout';

const ContactSuccess = () => {
  return ( 
    <ContactResponseLayout title="Message Sent!">
      <span 
        className="text-7xl drop-shadow-md sm:text-8xl"
        title="smiling face and eyes emoji"
      >
        😊
      </span>
      <h2 className="mt-3 text-3xl font-bold text-primary tracking-wide sm:mt-5 sm:text-4xl">
        Message sent!
      </h2>
      <p className="mt-1 text-gray-500 sm:text-lg dark:text-gray-300">
        I'll get back to you shortly.
      </p>
    </ContactResponseLayout>
  );
}
 
export default ContactSuccess;
import ContactResponseLayout from '../components/Contact/ContactResponseLayout';

const ContactError = () => {
  return ( 
    <ContactResponseLayout title="Sending Failed">
      <span 
        className="text-7xl drop-shadow-md sm:text-8xl"
        title="knocked-up face emoji"
      >
        😵
      </span>
      <h2 className="mt-3 text-3xl font-bold text-primary tracking-wide sm:mt-5 sm:text-4xl">
        Uh oh!
      </h2>
      <p className="mt-1 text-gray-500 sm:text-lg">
        An error has occured.
      </p>
      <p className="mt-2 text-xs text-gray-500/80 sm:text-sm">
        Try sending your message again in a bit.
      </p>
    </ContactResponseLayout>
  );
}
 
export default ContactError;
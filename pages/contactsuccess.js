import Link from 'next/link'

import SiteLayout from "../components/SiteLayout";

const ContactSuccess = () => {
  return ( 
    <SiteLayout>
      <div className="h-full grid justify-center content-center text-center">
        <h2 className="text-5xl font-bold text-primary md:text-6xl">Message sent!</h2>
        <span className="mt-3 text-2xl text-gray-500">I'll get back to you shortly.</span>
        <Link href="/" replace>
          <a className="button mt-7 mb-[-20px] w-40 justify-self-center md:mt-9 md:mb-0">Go back.</a>
        </Link>
      </div>
    </SiteLayout>
  );
}
 
export default ContactSuccess;
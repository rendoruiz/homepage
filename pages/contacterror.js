import Link from 'next/link'

import SiteLayout from "../components/SiteLayout";

const ContactError = () => {
  return ( 
    <SiteLayout>
      <div className="h-full grid justify-center content-center text-center">
        <h2 className="text-5xl font-bold text-red-500 md:text-6xl">Uh oh!</h2>
        <span className="mt-1 text-2xl text-gray-500">An error has occured.</span>
        <span className="mt-4 text-gray-500">Try sending your message again later.</span>
        <Link href="/" replace>
          <a className="button mt-7 mb-[-20px] w-40 justify-self-center md:mt-9 md:mb-0">Go back</a>
        </Link>
      </div>
    </SiteLayout>
  );
}
 
export default ContactError;
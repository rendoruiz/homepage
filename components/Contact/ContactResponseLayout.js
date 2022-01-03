import Head from 'next/head'
import Link from 'next/link'

import SiteLayout from "../SiteLayout";

const ContactResponseLayout = ({ title, children }) => {
  return (  
    <SiteLayout>
      <Head>
        <title>{ title } - Rendo Ruiz</title>
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="grid justify-center content-center h-full text-center">
        { children }

        {/* back to home */}
        <Link href="/" replace>
          <a className="button mt-7 mb-[-20px] w-40 justify-self-center text-sm sm:mt-9 sm:mb-0">Go back</a>
        </Link>
      </div>
    </SiteLayout>
  );
}
 
export default ContactResponseLayout;
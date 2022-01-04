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
          <a className="justify-self-center border-2 border-primary rounded-full mt-7 mb-[-20px] px-10 py-1 font-bold text-gray-800 text-center uppercase transition hover:bg-primary/80 hover:text-white active:opacity-80">
            Go back
          </a>
        </Link>
      </div>
    </SiteLayout>
  );
}
 
export default ContactResponseLayout;
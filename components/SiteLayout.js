import Head from 'next/head'

import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

const SiteLayout = ({ children }) => {
  return ( 
    <div className="grid grid-rows-[auto,1fr,auto] min-w-[300px] min-h-screen bg-gray-100 font-primary text-gray-800 tracking-wide select-none dark:bg-gray-800 dark:text-gray-100">
      {/* header */}
      <SiteHeader />

      {/* contents */}
      <main className="bg-white dark:bg-gray-900">
        { children }
      </main>

      {/* footer */}
      <SiteFooter />
    </div>
  );
}
 
export default SiteLayout;
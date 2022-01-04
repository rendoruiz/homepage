import SiteLayout from "../components/SiteLayout";

const NotFound = () => {
  return ( 
    <SiteLayout>
      <div className="h-full grid justify-center content-center text-center">
        <span
          className="text-7xl drop-shadow-md sm:text-8xl"
          title="uoh emoji"
        >
          😭
        </span>
        <h2 className="mt-4 text-4xl font-bold tracking-wide sm:text-5xl">
          404
        </h2>
        <span className="mt-1 text-lg text-gray-500 sm:text-xl sm:mt-2">
          Page not found.
        </span>
      </div>
    </SiteLayout>
  );
}
 
export default NotFound;
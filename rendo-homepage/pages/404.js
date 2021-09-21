import MainLayout from "../components/MainLayout";

const NotFound = () => {
  return ( 
    <MainLayout>
      <div className="h-full grid justify-center content-center text-center">
        <h2 className="text-7xl font-bold">404</h2>
        <span className="text-4xl">Page Not Found</span>
      </div>
    </MainLayout>
  );
}
 
export default NotFound;
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>İki Sayafda da bulunacak</h1>
      {/* içerde olan routeun bu sayfada konumlanacağı nokta */}
      <Outlet />
    </div>
  );
};

export default Layout;
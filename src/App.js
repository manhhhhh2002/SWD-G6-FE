import Register from './component/auth/Register';
import Login from './component/auth/Login';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Header from './component/footer/Header';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import './App.css'
import Verify from './component/auth/Verify';
import SideMenu from './component/admin/SideMenu';
import DashBoard from './component/admin/SideMenu/pages/DashBoard';
import PhoneSignUp from './component/auth/PhoneSignUp';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const LayoutAdmin = () => {
  return (
    <>
      <SideMenu/>
      <Outlet/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/phonenumber",
    element: <PhoneSignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin/db",
        element: <DashBoard />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

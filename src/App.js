import Register from './component/page/auth/Register';
import Login from './component/page/auth/Login';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Header from './component/common/Header';
import Home from './component/page/home/Home';
import Footer from './component/common/Footer';
import './App.css'
import Verify from './component/page/auth/Verify';
import SideMenu from './component/admin/SideMenu';
import DashBoard from './component/admin/SideMenu/pages/DashBoard';
import PhoneSignUp from './component/page/auth/PhoneSignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
}

export default App;

import Register from './component/auth/Register';
import Login from './component/auth/Login';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import Header from './component/footer/Header';
import Home from './component/home/Home';
import Home2 from './component/home/Home2';
import CreateHome2 from './component/home/CreateHome2'
import UpdateHome2 from './component/home/UpdateHome2'
import Footer from './component/footer/Footer';
import './App.css'
import Verify from './component/auth/Verify';
import SideMenu from './component/admin/SideMenu';
import DashBoard from './component/admin/SideMenu/pages/DashBoard';
import PhoneSignUp from './component/auth/PhoneSignUp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

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
      <SideMenu />
      <Outlet />
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
      {/* <div className="container">
        <RouterProvider router={router} />
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home2 />}></Route>
          <Route path='/create' element={<CreateHome2 />}></Route>
          <Route path='/update/:id' element={<UpdateHome2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

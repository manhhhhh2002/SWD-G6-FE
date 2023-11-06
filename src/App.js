import Register from './component/page/auth/Register';
import Login from './component/page/auth/Login';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Header from './component/page/commonView/Header';
import Home from './component/page/home/Home';
import Footer from './component/page/commonView/Footer';
import './App.css'
import Verify from './component/page/auth/Verify';
import PhoneSignUp from './component/page/auth/PhoneSignUp';
import Admin from './component/page/admin/Admin';
import AddNewSetting from './component/page/admin/NewSetting';
import UpdateSetting from './component/page/admin/EditSetting';
import ProjectList from './component/page/project/ProjectList';
import AddProject from './component/page/project/AddProject';
import EditProject from './component/page/project/UpdateProject';
import ClassList from './component/page/classList/ClassList';
import AdditionClass from "./component/page/additonClass/AdditionClass"


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
    element: <Admin />,
  },
  {
    path: "/admin/create",
    element: <AddNewSetting />,
  },
  {
    path: "/admin/edit/:id",
    element: <UpdateSetting />,
  },
  {
    path: "/project",
    element: <ProjectList />,
  },
  {
    path: "/project/create",
    element: <AddProject />,
  },
  {
    path: "/project/edit/:id",
    element: <EditProject />,
  },
  {
    path: "/class",
    element: <ClassList />,
  },
  {
    path: "/class/create",
    element: <AdditionClass />,
  },
  {
    path: "/class/edit/:id",
    element: <EditProject />,
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

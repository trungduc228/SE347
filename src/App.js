import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './views/RegisterLogin/Login';
import Register from './views/RegisterLogin/Register';
import AdminSidebar from './components/AdminSidebar/AdminSidebar'
import Dashboard from './views/Admin/Dashboard/Dashboard'
import AdminHeader from './components/AdminHeader/AdminHeader'
import Header from './components/Header/Header'

import Products from './views/Admin/Products/Products'
import Category from './views/Admin/Category/Category';
import AdminAddProduct from './views/Admin/Products/AddProduct';
import AdminEditProduct from './views/Admin/Products/EditProduct';
import EditCategory from './views/Admin/Category/EditCategory';
import AddCategory from './views/Admin/Category/AddCategory';
import { ToastContainer } from 'react-toastify'
import EditProfile from "./views/Admin/EditProfile/EditProfile"

const UserLayout = () => {
  return (
    <div className="font-baskerville flex flex-col min-h-screen overflow-hidden">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

const LoginLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

const AdminLayout = () => {
  const userLogin = JSON.parse(localStorage.getItem("USER_LOGIN"))

  if (userLogin && userLogin?.role === 'CUSTOMER') {
    return <p>abc</p>
  }
  return (
    <div>
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <Outlet />
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="category" element={<Category></Category>} />
          <Route path="products/add-product" element={<AdminAddProduct />} />
          <Route path="products/edit-product/:id" element={<AdminEditProduct />} />
          <Route path="category/add-category" element={<AddCategory />} />
          <Route path="category/edit-category/:id" element={<EditCategory />} />
          
        </Route>
      </Routes>
     
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
}

export default App;

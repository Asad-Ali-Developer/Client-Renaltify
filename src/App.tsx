import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import Register from "./pages/Register"
import RegisterTenant from "./pages/RegisterTenant"
import ShowTenantDetails from "./pages/ShowTenantDetails"
import Tenants from "./pages/Tenants"
import UpdateTenant from "./pages/UpdateTenant"
import UserProfile from "./pages/UserProfile"
import { AuthProvider } from "./store/authToken"
import TenantsProvider from "./store/TenantsProvider"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/tenants/add_tenant" element={<RegisterTenant />} />
        <Route path="/tenant/:_id/view" element={<ShowTenantDetails />} />
        <Route path="/tenant/:_id/update" element={<UpdateTenant />} />
      </Route>  

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)


const App = () => {
  return (
    <AuthProvider>
      <TenantsProvider>
        <RouterProvider router={router} />
      </TenantsProvider>
    </AuthProvider>
  )
}

export default App
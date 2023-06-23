import { BrowserRouter,Route,Routes } from "react-router-dom";
import UserLayout from './User/Layout'
import Home from './User/Home/Home'
import { useState } from "react";
import About from "./User/About/About";
import SingleBlog from "./User/Blog/SingleBlog";
import AdminLayout from "./Admin/AdminLayout";
import AdminBlogs from "./Admin/Home/AdminBlogs";
import AddBlog from "./Admin/Blog/Addblog";
import EditBlog from "./Admin/Blog/Editblog";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<UserLayout/>}>
    <Route path=""element={<Home/>}/>
    <Route path="about"element={<About/>}/>
    <Route path="blog/:id"element={<SingleBlog/>}/>
    </Route>
    {/* admin layout*/}
    
    <Route path="/admin/" element={<AdminLayout/>}>
    <Route index element={<AdminBlogs/>}/>
    <Route path="add" element={<AddBlog/>}/>
    <Route path="edit/:id" element={<EditBlog/>}/>
    
    </Route>
    </Routes> 

    </BrowserRouter>
    </>
  );
}
export default App;




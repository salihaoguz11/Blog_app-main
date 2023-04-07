import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import About from "../components/About";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Detail from "../pages/Detail";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;

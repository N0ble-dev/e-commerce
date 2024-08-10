import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/main/home/Home";
import Footer from "./components/footer/Footer";
import SignUp from "./components/main/signUp/SignUp";
import LogIn from "./components/main/signUp/LogIn";
import Wishlist from "./components/main/wshlist/Wishlist";
import TotalCart from "./components/main/totalCart/TotalCart";
import About from "./components/main/about/About";
import Contact from "./components/main/contact/Contact";
import ErrorPage from "./components/main/errorPage/ErrorPage";
import Profile from "./components/main/profile/Profile";
import TopHeader from "./components/header/TopHeader";
import CheckOut from "./components/main/checkOut/CheckOut";

const App = () => {
  return (
    <>
      <TopHeader />
      <div className="container mx-auto px-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<TotalCart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

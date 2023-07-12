import { useState } from "react";
import Header from "./components/Header";
import HomeMain from "./components/HomeMain";
import Footer from "./components/Footer";
import ProductMain from "./components/Product/ProductMain";
import About from "./components/About/About";
import Careers from "./components/Careers/Careers";
import Openings from "./components/Careers/Openings/Openings";
function App() {


  return (
    <>
      <Header />
      {/* <Careers/> */}
      <Openings></Openings>
      {/* <ProductMain/> */}
      {/* <About/> */}
      {/* <HomeMain /> */}
      <Footer />
    </>
  )
}

export default App

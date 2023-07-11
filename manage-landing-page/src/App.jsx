import { useState } from "react";
import Header from "./components/Header";
import HomeMain from "./components/HomeMain";
import Footer from "./components/Footer";
import ProductMain from "./components/Product/ProductMain";

function App() {


  return (
    <>
      <Header />
      <ProductMain/>
      {/* <HomeMain /> */}
      <Footer />
    </>
  )
}

export default App

import React from "react";

import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import Footer from "./assets/components/Footer";

import "./assets/style/header.css";
import "./assets/style/main.css"
import "./assets/style/footer.css"

import "./assets/style/fonts.css"
import "./assets/style/responsive.css"

export default function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
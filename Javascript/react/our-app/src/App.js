import React from "react";
import Component1 from './Component1'
import Header from './Components/Header'
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Header myname="Sarosh" />
      <Component1 school="kps" />
      <Footer />
    </div>
  )
}

export default App
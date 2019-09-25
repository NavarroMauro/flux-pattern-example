import React from "react";
import Header from "./common/Header";
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";

const App = () => {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") return <About />;
    if (route === "/courses") return <Courses />;
    return <Home />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
};

export default App;

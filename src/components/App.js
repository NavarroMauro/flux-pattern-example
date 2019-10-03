import React from "react";
import Header from "./common/Header";
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import ManageCourse from "./ManageCourse";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/course/:slug" component={ManageCourse} />
        <Route path="/course" component={ManageCourse} />
        <Route path="/courses" component={Courses} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;

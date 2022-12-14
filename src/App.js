import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Contents from "./components/Home/Contents";
import About from "./components/Pages/About";
import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";
import Portfolio from "./components/Pages/Portfolio";


function App() {
  return (
    <>
       <Switch>
          <Route exact path="/">
            <Contents/>
          </Route>

          {/* ---pages-- */}

          <Route path="/About">
            <About/>
          </Route>

          <Route path="/Portfolio">
            <Portfolio/>
          </Route>

          <Route path="/Contact">
            <Contact/>
          </Route>

          <Route path="/Blog">
            <Blog/>
          </Route>
          
        </Switch> 
     
    </>
  );
}

export default App;

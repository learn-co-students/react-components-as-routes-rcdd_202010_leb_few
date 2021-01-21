import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavLink from "./NavLink.js"
import About from "./About.js"
import Login from "./Login.js"

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

ReactDOM.render((
  <Router>
    <div>
      <NavLink/>
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>
)
  ,document.getElementById('root')
);

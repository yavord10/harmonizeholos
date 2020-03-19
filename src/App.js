import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import Meditation from './components/Meditation';
import BlogItem from './components/BlogItem';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/замен" component={AboutMe} />
        <Route path="/блог" component={Blog} />
        <Route path="/медитация" component={Meditation} />
        <Route path="/:blog" component={BlogItem} />
      </Switch>
    </div>
  );
}

export default App;

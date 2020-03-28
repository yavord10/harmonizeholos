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
import Holothropic from './components/Holothropic';
import SoulCollage from './components/SoulCollage';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import Hours from './components/Hours';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/замен" component={AboutMe} />
        <Route path="/блог" component={Blog} />
        <Route path="/медитация" component={Meditation} />
        <Route path="/холотропнодишане" component={Holothropic} />
        <Route path="/соулколаж" component={SoulCollage} />
        <Route path="/контакти" component={Contacts} />
        <Route path="/методи" component={Hours} />
        <Route path="/статия/:blog" component={BlogItem} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

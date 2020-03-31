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
import AOS from 'aos';
import 'aos/dist/aos.css';
import Harmonious from './components/Harmonious';
import Consultation from './components/Consultation';
import Therapy from './components/Therapy';
import Personal from './components/Personal';


function App() {
  AOS.init({duration: 1200})
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
        <Route path="/хармоничнодишане" component={Harmonious} />
        <Route path="/контакти" component={Contacts} />
        <Route path="/услуги/консултации" component={Consultation} />
        <Route path="/услуги/психотерапия" component={Therapy} />
        <Route path="/услуги/личностноразвитие" component={Personal} />
        <Route path="/резервация" component={Hours} />
        <Route path="/статия/:blog" component={BlogItem} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

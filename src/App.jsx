import './css/App.css';
import { BrowserRouter as Router ,
   Route, Switch } from 'react-router-dom';
   import Home from "./components/home/Home";
   import About from './components/about/About';
   import Navbar from './components/navbar/Navbar';
   import Services from './components/services/Services';
import Blogs from './components/blogs/Blogs';
import BlogDetail from './components/blogs/BlogDetails';
import Advertising from './components/services/advertising/Advertising';
import Logo from './components/services/logo/Logo';
import SocialContent from './components/services/socialContent/SocialContent';
import Reserve from './components/services/Reserve/Reserve';
function App() {
  return (
    <Router>
    <div className="App">
    <Route path="/" exact component={Blogs} />
    <Route path="/blog/:id" component={BlogDetail} />


    {/* <Advertising /> */}
       {/* <Navbar />

  


      <Home/> */}
    {/* <Switch>
      <Route  path='/home'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/services'>
        <Services/>
      </Route>
    </Switch> */}
    </div>
    </Router>
  );
}

export default App;

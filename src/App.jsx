import './css/App.css';
import { BrowserRouter as Router ,
   Route, Switch } from 'react-router-dom';
   import Home from "./components/home/Home";
   import About from './components/about/About';
   import Navbar from './components/navbar/Navbar';
   import Services from './components/services/Services';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Home/>
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

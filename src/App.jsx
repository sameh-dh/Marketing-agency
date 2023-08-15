import './css/App.css';
import { BrowserRouter as Router ,
   Route, Switch } from 'react-router-dom';
   import Home from "./components/home/Home";
   import About from './components/about/About';
   import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
    <Switch>
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;

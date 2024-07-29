import './App.css';
import Footer from './components/footer';
import Homesa from './components/home-sa';
import Homesb from './components/home-sb';
import Homesc from './components/home-sc';
import Homesd from './components/home-sd';
import Nav from './components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <div><h1>{process.env.REACT_APP_PUBLICK_KEY}</h1></div>
        <Nav></Nav>
        <Homesa/>
        <Homesb/>
        <Homesc/>
        <Homesd/>
        <Footer/>
        
    </div>
  );
}

export default App;

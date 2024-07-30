import './App.css';
import Footer from './components/footer';
import Form from './components/form';
import Homesa from './components/home-sa';
import Homesb from './components/home-sb';
import Homesc from './components/home-sc';
import Homesd from './components/home-sd';
import Nav from './components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
     
        <Nav></Nav>
        <Homesa/>
        <Homesb/>
        <Homesc/>
        <Homesd/>
        <Form/>
        <Footer/>
        
    </div>
  );
}

export default App;

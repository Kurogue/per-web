import './App.css';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
function App() {
  return (
    <div className="App">
      <Topbar/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;

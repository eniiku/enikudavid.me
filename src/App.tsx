import './App.scss';
import { Navbar } from './components';
import { About, Contact, Footer, Works } from './container';
import './index.css';

function App() {
  return (
    <div className="app" id="home">
      <Navbar />
      <Works />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import './App.scss';
import { Navbar } from './components';
import { About, Contact, Works } from './container';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Contact />
      <Works />
    </div>
  );
}

export default App;

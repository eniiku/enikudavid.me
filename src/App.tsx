import './App.scss';
import { Navbar } from './components';
import { About, Contact, Works } from './container';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Contact />
      <Works />
    </>
  );
}

export default App;

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    document.title = "Lantao Zhang Portfolio"
  })
  return (
    <div >
      <Navigation  />
      <Footer  />
    </div>
  );
}

export default App;

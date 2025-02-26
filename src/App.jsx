import './App.css'
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';

const App = () => {
  return (
    <div className='h-full w-full'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App

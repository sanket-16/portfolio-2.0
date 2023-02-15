import Navbar from './components/Navbar';
import About from './sections/About';
import Hero from './sections/Hero';
function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;

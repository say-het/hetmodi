import './App.css';
import Navbar from './components/Navbar';
import AnimatedCursor from 'react-animated-cursor';
import Pagestruct from './pageStruct/Pagestruct';

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={24}
        color="187, 134, 252" 
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      />
      <Navbar />
      <Pagestruct />
      
    </>
  );
}

export default App;

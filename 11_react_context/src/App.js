import logo from './logo.svg';
import './App.css';
import { ColorProvider } from './context/color';
import ColorBox from './components/ColorBox';
import SelectColor from './components/SelectColor';

function App() {
  return (
    <div className="App">
      <ColorProvider>
      <div>
        <SelectColor/>
        <ColorBox/>
      </div>
      </ColorProvider>
    </div>
  );
}

export default App;

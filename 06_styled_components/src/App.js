import logo from './logo.svg';
import './App.css';
import Button from './comp/Button';
import Box from './comp/Box';
import StyledComponents from './comp/StyledComponents';

function App() {
  return (
    <div className="App">
      <p>SCSS</p>
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">BUTTON</Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">BUTTON</Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">BUTTON</Button>
      </div>
      <div>
        <p>CSS Module</p>
        <Box/>
      </div>

      <div>
        <p>styled-components</p>
        <StyledComponents/>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import {FancyButton} from '@kode-kombat/fancy-button';

function App() {
  return (
    <div className="App">
      <p><FancyButton label="My Label 1" onClick={() => console.log("BUTTON 1 clicked")} /></p>
      <p><FancyButton label="My Label 2" type="reset" variant="contained" onClick={() => console.log("BUTTON 2 clicked")} /></p>
      <p><FancyButton label="My Label 3" type="submit" variant="text" onClick={() => console.log("BUTTON 3 clicked")} /></p>
    </div>
  );
}

export default App;

import './App.css';
import { Button } from './components/Button/Button.tsx';
import { Heading } from './components/Heading/Heading.tsx';
import { TextInput } from './components/TextInput/TextInput.tsx';

function App() {
  return (
    <div className="mainContainer">
      <Heading />
      <TextInput />
      <Button
        text="Submit"
        onClick={() => {}}
        backgroundColor="#74C365"
        color="black"
      />
    </div>
  );
}

export default App;

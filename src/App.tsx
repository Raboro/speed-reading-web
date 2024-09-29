import './App.css';
import { Heading } from './components/Heading/Heading.tsx';
import { TextInput } from './components/TextInput/TextInput.tsx';

function App() {
  const collectText = (text: string) => {
    console.log(text);
  };

  return (
    <div className="mainContainer">
      <Heading />
      <TextInput collectText={collectText} />
    </div>
  );
}

export default App;

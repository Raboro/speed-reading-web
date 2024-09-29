import './App.css';
import { Heading } from './components/Heading/Heading.tsx';
import { TextInput } from './components/TextInput/TextInput.tsx'

function App() {
  return <div className='mainContainer'>
    <Heading />
    <TextInput />
  </div>;
}

export default App;

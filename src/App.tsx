import { useState } from 'react';
import './App.css';
import { Heading } from './components/Heading/Heading.tsx';
import { TextInput } from './components/TextInput/TextInput.tsx';
import { Text } from './data/Text.ts';

function App() {
  const [text, setText] = useState<Text>(new Text(''));
  const collectText = (collectedText: string) => {
    setText(new Text(collectedText));
  };

  return (
    <div className="mainContainer">
      <Heading />
      <TextInput collectText={collectText} />
    </div>
  );
}

export default App;

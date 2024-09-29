import { useEffect, useState } from 'react';
import './App.css';
import { Heading } from './components/Heading/Heading.tsx';
import { TextInput } from './components/TextInput/TextInput.tsx';
import { Text } from './data/Text.ts';
import { Word } from './components/Word/Word.tsx';

function App() {
  const [text, setText] = useState<Text>(new Text(''));
  const [word, setWord] = useState<string>('');

  const collectText = (collectedText: string) => {
    setText(new Text(collectedText));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWord(text.get());
      console.debug(word);
    }, 1000); // 1s
    return () => {
      clearTimeout(timeout);
    };
  }, [text, word]);

  return (
    <div className="mainContainer">
      <Heading />
      <TextInput collectText={collectText} />
      <Word word={word} />
    </div>
  );
}

export default App;

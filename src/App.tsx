import { useEffect, useState } from 'react';
import './App.css';
import { Heading } from './components/Heading/Heading.tsx';
import { TextInput } from './components/TextInput/TextInput.tsx';
import { Text } from './data/Text.ts';
import { Word } from './components/Word/Word.tsx';
import { WordSpeed } from './components/WordSpeed/WordSpeed.tsx';

function App() {
  const [text, setText] = useState<Text>(new Text(''));
  const [word, setWord] = useState<string>('');
  const [delay, setDelay] = useState<number>(1000);

  const collectText = (text: string) => setText(new Text(text));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWord(text.get());
      console.debug(word);
    }, delay); // 1s
    return () => {
      clearTimeout(timeout);
    };
  }, [text, word, delay]);

  const onWpsChange = (wps: number) => setDelay(1000 / wps);

  return (
    <div className="mainContainer">
      <Heading />
      <TextInput collectText={collectText} />
      <Word word={word} />
      <WordSpeed onWpsChange={onWpsChange} />
    </div>
  );
}

export default App;

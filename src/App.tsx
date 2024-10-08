import { useEffect, useState } from 'react';
import './App.css';
import { Heading } from './components/Heading/Heading.tsx';
import { TextInput } from './components/TextInput/TextInput.tsx';
import { Text } from './data/Text.ts';
import { Word } from './components/Word/Word.tsx';
import { WordSpeed } from './components/WordSpeed/WordSpeed.tsx';

const ONE_SECOND = 1000;

function App() {
  const [text, setText] = useState<Text>(new Text(''));
  const [word, setWord] = useState<string>('');
  const [delay, setDelay] = useState<number>(ONE_SECOND);

  const collectText = (text: string) => setText(new Text(text));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWord(text.get());
      console.debug(word);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [text, word, delay]);

  const onWpsChange = (wps: number) => setDelay(ONE_SECOND / wps);

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

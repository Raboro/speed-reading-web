import './Word.css';

interface WordProps {
  word: string;
}

export function Word(props: Readonly<WordProps>) {
  return <h1 className="word">{props.word}</h1>;
}

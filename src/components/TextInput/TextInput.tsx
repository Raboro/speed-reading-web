import { useState } from 'react';
import './TextInput.css';
import { Button } from '../Button/Button';

interface TextInputProps {
  collectText: (text: string) => void;
}

export function TextInput(props: Readonly<TextInputProps>) {
  const [text, setText] = useState<string>('');

  return (
    <>
      <div className="textareaContainer">
        <label className="label">
          Text Input
          <textarea
            className="textarea"
            name="TextInput"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </label>
      </div>
      <Button
        text="Submit"
        onClick={() => {
          props.collectText(text);
        }}
        backgroundColor="#74C365"
        color="black"
      />
    </>
  );
}

import { useState } from 'react';
import './TextInput.css';

export function TextInput() {
  const [text, setText] = useState<string>('');

  return (
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
  );
}

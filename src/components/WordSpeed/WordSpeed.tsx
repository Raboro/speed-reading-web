import { useState } from 'react';
import './WordSpeed.css';

interface WordSpeedProps {
  onWpsChange: (wps: number) => void;
}

export function WordSpeed(props: Readonly<WordSpeedProps>) {
  const [wps, setWps] = useState<number>(60);

  const calculateWPS = (value: number) => {
    setWps(value);
    props.onWpsChange(value === 0 ? 0 : value / 60);
  };

  return (
    <div className="wordSpeedContainer">
      <input
        type="range"
        list="markers"
        max={600}
        defaultValue={60}
        onChange={(event) =>
          calculateWPS(event.target.value as unknown as number)
        }
      />
      <datalist id="markers">
        <option value="0">0</option>
        <option value="30">30</option>
        <option value="60">60</option>
        <option value="100">100</option>
        <option value="150">150</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
        <option value="500">500</option>
        <option value="600">600</option>
      </datalist>
      <h3>Words per minute: {wps}</h3>
    </div>
  );
}

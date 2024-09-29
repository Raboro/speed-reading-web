import './Button.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  backgroundColor: string;
  color: string;
}

export function Button(props: Readonly<ButtonProps>) {
  return (
    <button
      type="button"
      className="buttonContainer"
      onClick={props.onClick}
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      {props.text}
    </button>
  );
}

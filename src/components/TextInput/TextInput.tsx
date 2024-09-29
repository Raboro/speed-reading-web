import './TextInput.css'

export function TextInput() {
  return (
    <div className='textareaContainer'>
      <label className='label'>
        Text Input
        <textarea className='textarea' name="TextInput" defaultValue="Reading Text" />
      </label>
    </div>
  );
}

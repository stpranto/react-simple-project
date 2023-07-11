import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleButtonClick = () => {
    setDisplayedText(text);
  };

  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <Header title="Simple React Application" />
      <Content
        text={text}
        onButtonClick={handleButtonClick}
        onTextAreaChange={handleTextAreaChange}
      />
      <Footer />
    </div>
  );
}

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Content({ text, onButtonClick, onTextAreaChange }) {
  return (
    <div>
      <textarea value={text} onChange={onTextAreaChange} />
      <br />
      <button onClick={onButtonClick}>Display Text</button>
      <p>{text && `Displayed Text: ${text}`}</p>
    </div>
  );
}

function Footer() {
  return <p>Created by [Your Name] | Favorite Quote: [Your Favorite Quote]</p>;
}

export default App;

import logo from './logo.png';
import belle from './BelleKiss.png';
import snoopy from './Snoopy2.webp';
import './App.css';
import AudioPlayerComponent from './AudioComponent';
import React, { useState, useEffect } from 'react';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [yesClick, setYesClick] = useState(false);
  const [buttonSize, setButtonSize] = useState(50);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const [buttonPosition, setButtonPosition] = useState({ x: 1000, y: 628 });
  const [buttonText, setButtonText] = useState("No");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submission logic here, using the inputValue state
    console.log('Input submitted:', inputValue);

    if (inputValue === 'Vivienne') {
      // Navigate to the next page or perform other actions
      // history.push('/next-page');
      setSubmitted(true);
    } else {
      // Handle other cases or show an error message
      alert('Incorrect, this is not meant for you, sorry!');
    }
  };
  
  const handleYes = (event) => {
    event.preventDefault();
    console.log('Yes');
    setYesClick(true);
    {renderHeartEmojis()}
  }

  const handleNo = (event) => {
    event.preventDefault();
    console.log('No');
    const maxX = window.innerWidth - buttonSize;
    const maxY = window.innerHeight - buttonSize;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    setButtonPosition({ x: newX, y: newY });
    setButtonText("Are you sure?");
  }

  const renderHeartEmojis = () => {
    const heartEmojis = Array.from({ length: 50 }, (_, index) => (
      <span key={index} className="heart-emoji" role="img" aria-label="heart">❤️</span>
    ));

    return heartEmojis;
  };

  useEffect(() => {
    // Ensure the button stays within the bounds of the window
    const maxX = window.innerWidth - buttonSize;
    const maxY = window.innerHeight - buttonSize;
    if (buttonPosition.x > maxX || buttonPosition.y > maxY) {
      setButtonPosition({ x: maxX, y: maxY });
    }
  }, [buttonPosition, buttonSize]);

  return (
    <div className="App">
      <header className="App-header">
        {submitted ? 
        (
          <div>
            <img src={snoopy}  className="App-logo2"/>
            {yesClick ? <img src={belle} className="App-logo" alt="logo" /> : ''}
          
          </div>
        ) : 
        (<img src={logo} className="App-logo" alt="logo" />)}
        
        {submitted ?
        (
          <div>
            {!yesClick ? <p>
              Will you be my valentine?
            </p> : renderHeartEmojis()}
          </div>
        )
        : 
        (
          <p>
            What is your first name?
          </p>
        )
        }
        
        {submitted ?
        (
          <div>
            {yesClick ? '' :
            <div className="button-container">
            <button className="button1"
              style={{ width: `50px`, height: `43px` }} 
              onClick={handleYes} 
              type="yes">
                Yes
            </button>
            <button className="button2" 
              style={{
                // width: `50px`, 
                // height: `50px`,
                position: 'absolute',
                left: `${buttonPosition.x}px`,
                top: `${buttonPosition.y}px`,
              }}
              onClick={handleNo} 
              type="no">
                {buttonText}
            </button>
            </div>
            }
          </div>
        )
        : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <form onSubmit={handleSubmit}>
              <input className="App-input" name="nameInput" placeholder="Type here" value={inputValue} onChange={handleInputChange} />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>)
        }
        <AudioPlayerComponent/>
      </header>
    </div>
  );
}

export default App;

import { useState } from 'react'

import './App.css';


function App() {
  
  const [noteText, setNoteText] = useState('')

  const handleNoteTextChange = (e) => {
    setNoteText(e.target.value);
  }

  const handleSaveNote = () => {
    localStorage.setItem('newNote', noteText);
    console.log(localStorage)
  }

  const handleDeleteNote = () => {
    localStorage.clear();
    console.log(localStorage)
  }

  return (
    <div className="App">
      <div className="note-container">
        <div className="top-bar">
          <button onClick={handleDeleteNote} className="delete-button">X</button>
        </div>
        <textarea value={noteText} onChange={handleNoteTextChange} className="text-container"></textarea>
        <button onClick={handleSaveNote}>Save Note</button>
      </div>
      <div>{localStorage.getItem('newNote')}</div>
    </div>
  );
}

export default App;

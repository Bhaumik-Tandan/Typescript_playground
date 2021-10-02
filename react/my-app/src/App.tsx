import React from 'react';
import Los_angels from './components/los_angels';
import Navhook from "./hooks/navhook";

function App() {
  return (
    <div className="App">
      <Navhook>
        <Los_angels/>
       </Navhook>
    </div>
  );
}

export default App;

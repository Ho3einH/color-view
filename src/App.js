import { useState } from 'react';
import ColorBox from './ColorBox'
import AddColor from './AddColor'

function App() {
  const [colors, setColor] = useState([''])

  const handleSubmit = (e) => {
    e.preventDefault()
    setColor('')
  }

  
  

  return (
    <div className='App' >
      <ColorBox
        colors={colors}
      />
      <AddColor
        colors={colors}
        setColor={setColor}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;

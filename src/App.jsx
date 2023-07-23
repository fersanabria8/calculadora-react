import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    setValue(value + e.target.value)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    setValue(value.slice(0, -1))
  }

  const handleClean = (e) => {
    e.preventDefault()
    setValue('')
  }

  const handleResult = (e) => {
    e.preventDefault()
    setValue(eval(value))
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  return (
    <div className="container">
      <div className="calculadora">
        <form action="">
          <div className='display'>
            <input type="text" onChange={handleChange} value={value}/>
          </div>
          <div>
            <input type="button" value="AC" onClick={handleClean}/>
            <input type="button" value="DE" onClick={handleDelete}/>
            <input type="button" value="." onClick={handleClick}/>
            <input type="button" value="/" onClick={handleClick}/>
          </div>
          <div>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="8" onClick={handleClick} />
            <input type="button" value="9" onClick={handleClick}/>
            <input type="button" value="*" onClick={handleClick}/>
          </div>
          <div>
            <input type="button" value="4" onClick={handleClick}/>
            <input type="button" value="5" onClick={handleClick}/>
            <input type="button" value="6" onClick={handleClick}/>
            <input type="button" value="+" onClick={handleClick}/>
          </div>
          <div>
            <input type="button" value="1" onClick={handleClick}/>
            <input type="button" value="2" onClick={handleClick}/>
            <input type="button" value="3" onClick={handleClick}/>
            <input type="button" value="-" onClick={handleClick}/>
          </div>
          <div>
            <input type="button" value="00" onClick={handleClick}/>
            <input type="button" value="0" onClick={handleClick}/>
            <input type="button" value="=" className='equal' onClick={handleResult}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App

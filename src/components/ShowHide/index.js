// Write your code here
import React, {useState} from 'react'
import './index.css'

const ShowHide = () => {
  const [showFirstName, setShowFirstName] = useState(false)
  const [showLastName, setShowLastName] = useState(false)

  return (
    <div className="container">
      <h1 className="heading">Show/Hide</h1>
      <div className="buttons-container">
        <div className="button-item">
          <button
            className="toggle-button"
            onClick={() => setShowFirstName(!showFirstName)}
          >
            Show/Hide Firstname
          </button>
          {showFirstName && <p className="name-box">Joe</p>}
        </div>
        <div className="button-item">
          <button
            className="toggle-button"
            onClick={() => setShowLastName(!showLastName)}
          >
            Show/Hide Lastname
          </button>
          {showLastName && <p className="name-box">Jonas</p>}
        </div>
      </div>
    </div>
  )
}

export default ShowHide

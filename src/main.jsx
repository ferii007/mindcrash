import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { isBrowser } from 'react-device-detect'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
      (!isBrowser) ? (
        <div>
          <h5 className='device-detect'>Sorry, this content available only on Desktop</h5>
        </div>
      ) :
      (
        <App />
      )
    }
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  const username = 'anas raza'
  return (
    <h2>Custom App | {username}</h2>
  )
}

const username = 'anas';
const reactElem = React.createElement(
  'a',
  { href: 'https://google.com' },
  'Click to see me',
  username
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    < MyApp />
    <App />
  </>
)

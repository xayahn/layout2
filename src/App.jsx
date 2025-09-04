import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="container">
      <div className="header">Cyrus Josh D. Layug</div>
      <div className="content">
        <div className="content1">
          <div className="c1left">
            <div className="hero">Hero</div>
            <div className="sidebar">Sidebar</div>
          </div>
          <div className="c1right">
            <div className="mc">Main Content</div>
            <div className="ec">Extra Content</div>
          </div>
        </div>
        <div className="content2">
          <div className="ri">Related Images</div>
          <div className="rp">Related Posts</div>
        </div>
      </div>
      <div className="footer">CPEITEL1 IT3B</div>
    </div>

  )
}

export default App

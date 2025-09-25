import './App.css'

function App() {
  return (
    <div className="container">
      {/* Top Section */}
      <div className="top">
        <div className="box"></div>
        <div className="nested">
          <div></div>
          <div></div>
        </div>
        <div className="box"></div>
      </div>

      {/* Middle Section */}
      <div className="middle">
        <div className="left"></div>
        <div className="right">
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <div className="side"></div>
        <div className="small"></div>
        <div className="small"></div>
        <div className="side"></div>
      </div>
    </div>
  )
}

export default App

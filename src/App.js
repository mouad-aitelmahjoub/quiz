import { useState } from "react"
import "./app.css"
import EndGame from "./components/EndGame"
import Pyramid from "./components/Pyramid"
import Timer from "./components/Timer"
import Trivia from "./components/Trivia"
import { moneyPyramid } from "./data"

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [gameOver, setGameOver] = useState(false)
  const [earnings, setEarnings] = useState("$ 0")

  return (
    <div className="app">
      <div className="main">
        {gameOver ? (
          <EndGame earnings={earnings} />
        ) : (
          <>
            <div className="top">
              <Timer />
            </div>
            <div className="bottom">
              <Trivia questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} setGameOver={setGameOver} setEarnings={setEarnings} />
            </div>
          </>
        )}
      </div>
      <Pyramid moneyPyramid={moneyPyramid} questionNumber={questionNumber} />
    </div>
  )
}

export default App

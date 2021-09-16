import { useState, useEffect } from "react"
import { questions, moneyPyramid } from "../data"
import useSound from "use-sound"
import correct from "../assets/correct 1.mp3"
import wrong from "../assets/wrong 1.mp3"

export default function Trivia({ questionNumber, setQuestionNumber, setGameOver, setEarnings }) {
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answerClassname, setAnswerClassname] = useState("answer")
  const [correctAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong)

  useEffect(() => {
    setCurrentQuestion(questions[questionNumber - 1])
    questionNumber > 1 && setEarnings(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
  }, [setEarnings, questionNumber])

  const handleAnswer = (a) => {
    setSelectedAnswer(a)
    setAnswerClassname(a.correct ? "answer correct" : "answer wrong")
    setTimeout(() => {
      if (a.correct) {
        correctAnswer()
        setTimeout(() => {
          setQuestionNumber((prev) => prev + 1)
          setSelectedAnswer(null)
        }, 800)
      } else {
        wrongAnswer()
        setTimeout(() => {
          setGameOver(true)
        }, 800)
      }
    }, 2000)
  }
  return (
    <div className="trivia">
      <div className="question">{currentQuestion?.question}</div>
      <div className="answers">
        {currentQuestion?.answers.map((a) => (
          <div key={currentQuestion.id + Math.random()} className={selectedAnswer === a ? answerClassname : "answer"} onClick={() => handleAnswer(a)}>
            {a.text}
          </div>
        ))}
      </div>
    </div>
  )
}

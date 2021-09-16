import React from "react"

const Pyramid = ({ moneyPyramid, questionNumber }) => {
  return (
    <div className="pyramid">
      <ul className="moneyList">
        <h2 className="pyramidTitle">&#128184; Money Pyramid &#128184;</h2>
        {moneyPyramid.map((m) => (
          <li key={m.id} className={m.id === questionNumber ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pyramid

import React, { useState } from 'react';
import "./App.css";

function App() {
  // State
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);
  const [k, setK] = useState(0);
  const [singleRollResult, setSingleRollResult] = useState([]);
  const [multipleRollResult, setMultipleRollResult] = useState([]);

  // Function to simulate single dice roll
  const singleDiceRoll = (n, m) => {
    let diceroll = new Array(m);
    for (let i = 0; i < m; i++) {
      let roll = Math.floor(Math.random() * n) + 1;
      diceroll[i] = roll;
    }
    return diceroll;
  }

  // Function to simulate multiple dice rolls
  const multipleDiceRolls = (n, m, k) => {
    let results = [];
    for (let i = 0; i < k; i++) {
      let diceroll = new Array(m);
      for (let j = 0; j < m; j++) {
        let roll = Math.floor(Math.random() * n) + 1;
        diceroll[j] = roll;
      }
      results.push(diceroll);
      console.log("diceroll" + diceroll);
    }
    return results;
  }

  // Function to simulate dice rolls
  const diceSimulation = (isSingleRoll) => {
    let n, m, k;
    if (isSingleRoll) {
      n = parseInt(document.getElementById("n").value);
      m = parseInt(document.getElementById("m").value);
    } else {
      n = parseInt(document.getElementById("n-multiple").value);
      m = parseInt(document.getElementById("m-multiple").value);
      k = parseInt(document.getElementById("k").value);
      if (isNaN(k)) {
        alert("Please enter the number of rolls");
      }
    }
    // error checking
    if (isNaN(n) || isNaN(m) || (!isSingleRoll && isNaN(k))) {
      alert("Please enter valid numbers");
      return;
    }
    if (isSingleRoll) {
      let result = singleDiceRoll(n, m);
      setSingleRollResult(result);
    } else {
      let result = multipleDiceRolls(n, m, k);
      setMultipleRollResult(result);
    }
  }

  return (
    <div>
      <div className="App">

        <h1>Probability Calculator for N-sided Dice</h1>

        <div className="instructions">
          <h2>Instructions</h2>
          <p>1. Enter the number of sides on the dice (n).</p>
          <p>2. Enter the number of dice to roll (m).</p>
          <p>3. For multiple rolls, enter the number of successes (k).</p>
          <p>4. Click the "Simulate" button to see the result.</p>
        </div>

        <div className="container">
          <div className="simulateRoll">
            <h2>Single Roll</h2>
            <label>Number of sides:</label>
            <input type="number" id="n" placeholder="Enter the number of sides" />
            <label>Number of dice:</label>
            <input type="number" id="m" placeholder="Enter the number of dice" />
            <button onClick={() => {
              setN(parseInt(document.getElementById("n").value));
              setM(parseInt(document.getElementById("m").value));
              diceSimulation(true);
            }}>Simulate</button>

            <h2>Probabilities</h2>
            <div className="probabilities">
              {calculateProbabilities(n, m).map((probability, sum) => (
                <div key={sum}>
                  <p>Sum: {sum}</p>
                  <p>Probability: {probability}</p>
                </div>
              ))}
            </div>

            {/* Display the result of the single dice roll */}
            <div className="rollResult">
              <div className="nth-roll">
                {singleRollResult.map((value, index) => (
                  <div key={index} className="dice-box">{value}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="simulateRoll">
            <h2>Multiple Rolls</h2>
            <label>Number of sides:</label>
            <input type="number" id="n-multiple" placeholder="Enter the number of sides" />
            <label>Number of dice:</label>
            <input type="number" id="m-multiple" placeholder="Enter the number of dice" />
            <label>Number of rolls:</label>
            <input type="number" id="k" placeholder="Enter the number of successes" />
            <button onClick={() => {
              setN(parseInt(document.getElementById("n-multiple").value));
              setM(parseInt(document.getElementById("m-multiple").value));
              setK(parseInt(document.getElementById("k").value));
              diceSimulation(false);
            }}>Simulate</button>


            {/* Display the result of the multiple dice rolls */}
            <div className="rollResult">
              {multipleRollResult.map((roll, rollIndex) => (
                <div key={rollIndex}>
                  <h3>Roll {rollIndex + 1}</h3>
                  <div className="nth-roll">
                    {roll.map((value, index) => (
                      <div key={index} className="dice-box">{value}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


export default App;

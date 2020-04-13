import React, { useState } from "react";
import Statistics from "./components/Statistics";
import Feedback from "./components/Feedback";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood((feedback) => feedback + 1);
  };

  const handleNeutral = () => {
    setNeutral((feedback) => feedback + 1);
  };

  const handleBad = () => {
    setBad((feedback) => feedback + 1);
  };

  const total = () => {
    return good + bad + neutral;
  };

  const averageCalc = () => {
    return (good - bad) / total();
  };

  const positiveCalc = () => {
    return (good / total()) * 100;
  };

  return (
    <div className='App'>
      <h3>give feedback</h3>
      <Feedback
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
      />
      <h3>statistics</h3>
      {total() === 0 ? (
        "No feedback given"
      ) : (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          all={total()}
          average={averageCalc()}
          positive={positiveCalc()}
        />
      )}
    </div>
  );
}

export default App;

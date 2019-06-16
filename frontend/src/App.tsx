import * as React from 'react';
import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <>
      <h3>Gains</h3>

      <p>Next workout:</p>
      <h5>Push</h5>

      <ul>
        <li>Bench press: 2 warmup, 3 working sets 6-8 reps</li>
        <li>Incline Cable Fly: 4 sets, 15 reps</li>
        <li>Standing dumbbell shoulder press: 3 sets, 15 reps</li>
        <li>Egyptian cable lateral shoulder rise: 3 sets, 15 reps</li>
        <li>Triceps rope extensions: 3 sets, 15 reps</li>
      </ul>

      <h5>Statistics</h5>
      <p>5% increase in moved weight</p>
      <p>Last week: 150kg</p>
      <p>This week: 157kg</p>
    </>
  );
};

export default App;

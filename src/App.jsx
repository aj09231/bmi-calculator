
import { useState } from 'react';
import './App.css';

function App() {

  const [weight, setweight] = useState('');
  const [height, setheight] = useState('');
  const [bmi, setbmi] = useState(null);

  function calculateBMI() {
    let result = weight / ((height / 100) * (height / 100));
    setbmi(result);
  }

  function resetBMI() {
    setweight('');
    setheight('');
    setbmi(null);
  }

  function getcategory() {
    if (bmi < 18.5) {
      return 'underweight';
    } else if (bmi < 25) {
      return 'normal weight';
    } else if (bmi < 30) {
      return 'overweight';
    } else {
      return 'obese';
    }
  }

  return (
    <div>
      <h1>BMI calculator</h1>

      <h3>Weight (in kgs)</h3>
      <input
        type="text"
        value={weight}
        onChange={(e) => setweight(e.target.value)} />

      <h3>Height (cm)</h3>
      <input
        type="text"
        value={height}
        onChange={(e) => setheight(e.target.value)} />
      <br />
      <button onClick={calculateBMI}> Calculate </button>
      <button onClick={resetBMI}> Reset</button>

      {bmi !== null &&(
        <div>
          <h2> Your BMI is: {bmi.toFixed(1)}</h2>
          <h3> You fall in this category: {getcategory()}</h3>
        </div>
      )}
    </div>
  );
}

export default App;

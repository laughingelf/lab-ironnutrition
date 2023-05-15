
import AddFoodForm from './components/AddFoodForm';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json'
import { useState } from 'react'
import Search from './components/Search';

function App() {

  const [theseFoods, setTheseFoods] = useState(foods)
  const [thoseFoods, setThoseFoods] = useState(foods)




  return (
    <div className="App">
      <div id='foodForm'>
        <AddFoodForm setTheseFoods={setTheseFoods} theseFoods={theseFoods} setThoseFoods={setThoseFoods} thoseFoods={thoseFoods} />

      </div>

      <div>
        <Search setTheseFoods={setTheseFoods} theseFoods={theseFoods} setThoseFoods={setThoseFoods} thoseFoods={thoseFoods} />

      </div>
      <div id='appMain'>
        {theseFoods.map((food) => {
          return (
            <div>
              <FoodBox food={food} setTheseFoods={setTheseFoods} theseFoods={theseFoods} setThoseFoods={setThoseFoods} thoseFoods={thoseFoods} />
            </div>
          )
        })}
      </div>


    </div>
  );
}

export default App;

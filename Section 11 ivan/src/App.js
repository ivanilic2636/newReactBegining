import React from 'react';
import Header from "./components/Header/Header";
import AvailableMeals from './components/Meals/AvailableMeals/AvailableMeals';
import MealSummary from './components/Meals/MealSummary/MealSummary';
import DUMMY_MEALS from './dummy-meals';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MealSummary />
      <AvailableMeals meals={DUMMY_MEALS}/>
    </React.Fragment>
  );
}

export default App;

import React, { useState } from "react";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import Antd from "./components/Antd";

import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Learn React!", id: "g1" },
    { text: "Learn how to style it!", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => { 
 
  setCourseGoals((prevGoals) => {
    const updatedGoals = prevGoals.filter ((goal) => goal.id !== goalId) ; 
    return updatedGoals ;
  });

  const enteredText = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
    return (
    <>
      <h1 style={enteredText}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
    );
  };

  let content = (
    <p style={{ color: 'blue', lineHeight : 10, padding: 20, }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div 
    // className="App"
    style={{
    margin:"0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    }}
    >
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>

      <Antd />
    </div>

  
  );
};

export default App;

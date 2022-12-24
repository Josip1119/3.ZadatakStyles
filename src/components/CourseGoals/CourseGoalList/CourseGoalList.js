import React from "react";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./Modules.css";

const CourseGoalList = (props) => {
  return (
    <ul className="CSS-Modules">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;

// import "./CourseGoalList.css";

// const CourseGoalList = (props) => {
//   return (
//     <ul className="goal-list">
//       {props.items.map((goal) => (
//         <CourseGoalItem
//           key={goal.id}
//           id={goal.id}
//           onDelete={props.onDeleteItem}
//         >
//           {goal.text}
//         </CourseGoalItem>
//       ))}
//     </ul>
//   );
// };

// export default CourseGoalList;

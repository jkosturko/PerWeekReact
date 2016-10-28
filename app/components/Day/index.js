import React from 'react';

import styles from './styles.css';
import Goal from '../Goal'


//Rename this goal
function Day(props) {
  return (
    <div>
    <h3>Weekly</h3>
      <Goal title='Meditate' current={1} endGoal={2}/>
      <Goal title='Gym' current={6} endGoal={8}/>
    <h3>Daily</h3>
      <Goal title='Drink Water' current={6} endGoal={6}/>
      <Goal title='Stretch' current={1} endGoal={1}/>

    </div>

  );
}

export default Day;

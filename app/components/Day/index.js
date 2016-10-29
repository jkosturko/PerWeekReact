import React from 'react';
import styles from './styles.css';
import Goal from '../Goal'
import GoalsWeekly from '../GoalsWeekly'
import GoalsDaily from '../GoalsDaily'

// put title in the data?
function Day(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <GoalsWeekly title='Weekly' goals={props.goals.weekly} />
      <GoalsDaily title='Daily' goals={props.goals.daily} />
    </div>  
   );
}

export default Day;

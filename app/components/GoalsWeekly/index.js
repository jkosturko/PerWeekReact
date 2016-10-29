import React from 'react';
import styles from './styles.css';
import Goal from '../Goal'


//Rename this goal
//Do I need to make a more unique key?
class GoalsWeekly extends React.Component {
  render() {
    
    var weeklyGoals = this.props.goals.map(function(goal, i) {
      const {title, endGoal, completed} = goal

      return (
        <Goal title={title} endGoal={endGoal} completed={completed} key={i} />
      )
    })

    return (
      <div>
        <h3>{this.props.title}</h3>
        {weeklyGoals}
      </div>
    );
  }
}

export default GoalsWeekly;

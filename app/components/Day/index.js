import React from 'react';
import styles from './styles.css';
import Goal from '../Goal'


//Rename this goal
//Do I need to make a more unique key?
class Day extends React.Component {
  render() {

    var dailyGoals = this.props.goals.daily.map(function(goal, i) {
      const {title, endGoal, completed} = goal

      return(
        <Goal title={title} endGoal={endGoal} completed={completed} key={i} />
      )
    })

    var weeklyGoals = this.props.goals.weekly.map(function(goal, i) {
      const {title, endGoal, completed} = goal

      return (
        <Goal title={title} endGoal={endGoal} completed={completed} key={i} />
      )
    })

      return (
        <div>
        <h2>{this.props.title}</h2>
        <h3>Weekly</h3>
          {weeklyGoals}
        <h3>Daily</h3>
          {dailyGoals}
        </div>  
     );

  }

}

export default Day;

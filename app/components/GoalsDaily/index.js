import React from 'react';
import styles from './styles.css';
import Goal from '../Goal'


//Rename this goal
//Do I need to make a more unique key?
class GoalsDaily extends React.Component {
  render() {

    var dailyGoals = this.props.goals.map(function(goal, i) {
      const {title, endGoal, completed} = goal

      return(
        <Goal title={title} endGoal={endGoal} completed={completed} key={i} />
      )
    })

      return (
        <div>
          <h3>{this.props.title}</h3>
          {dailyGoals}
        </div>  
     );

  }

}

export default GoalsDaily;

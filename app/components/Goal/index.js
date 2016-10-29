import React from 'react';
import styles from './styles.css';
import Dot from '../Dot'

debugger
class Goal extends React.Component {
  render () {
    var DotRow = [];

    for (var i = 0; i < this.props.endGoal; i++) {
      DotRow.push(<Dot key={i}/>);
    }
  return (
    <div>
      <div className={styles.goalContainer}>{this.props.title}</div>
      <div className={styles.dotContainer}>{DotRow}</div>
     </div>
  );
}

}

export default Goal;

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
      {this.props.title}
      {DotRow}
     </div>
  );
}

}

export default Goal;

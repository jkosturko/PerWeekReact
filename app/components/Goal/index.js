import React from 'react';
import styles from './styles.css';
import Dot from '../Dot'

class Goal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      endGoal: this.props.endGoal,
      completed: this.props.completed
    }
    console.log('this state', props, this.state)
  }

  handleClick (e) {
    console.log('clicking', e.target)
    this.setState({endGoal: 4})
  }
    
  render () {
    var DotRow = [];

    for (var i = 0; i < this.state.endGoal; i++) {
      DotRow.push(<Dot key={i} onClick={this.handleClick} />);
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

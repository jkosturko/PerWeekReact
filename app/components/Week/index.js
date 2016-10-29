import React from 'react';
import styles from './styles.css';
import Day from '../Day'

class Week extends React.Component {
  render () {

    var days = this.props.days.map(function(day, i) {
      const { title, goals } = day;
      return(<Day title={title} key={i} goals={goals} />)
    });
  
    return (
      <div> 
        <h1>{this.props.title}</h1>
        { days }
      </div>

    );
  }
}

export default Week;

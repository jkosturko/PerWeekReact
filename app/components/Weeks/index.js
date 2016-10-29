import React from 'react';
import styles from './styles.css';
import Week from '../Week'
import dataJson from '../../data.json' //Get this from server

class Weeks extends React.Component {
  render () {

    const { title, days } = dataJson.week1;

    return (
      <div>
        <Week title={title} days={days} />
      </div>
    );
  }
}

export default Weeks;

import React from 'react';

import styles from './styles.css';

//Rename to Goal

class Dot extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);

    console.log(props)
  }

  render() {
    return (
      <div className={styles.dot} {...this.props} />
    );
  }
}

export default Dot;

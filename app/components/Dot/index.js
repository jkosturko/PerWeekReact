import React from 'react';

import styles from './styles.css';

//Rename to Goal
function Dot(props) {
  return (
    <div className={styles.dot} {...props} />
  );
}

export default Dot;

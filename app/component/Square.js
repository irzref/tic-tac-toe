import React from 'react';
import styles from '../Style.css';

export let Square = (props) => {
    return (
      <button className={styles.square} onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

export default {Square};
/* eslint-disable react/prop-types */
// import React from 'react';
// import PropTypes from 'prop-types';
import styles from './style.module.css'

const Task = (props) => {
  return (
    <>
    <li>{props.task.id} - {props.task.title} 
    <button className={styles.buttonOk} onClick={() => props.handleAddOk(props.id)}>Ok</button>
    </li>
    
    </>
  )
}


// Task.propTypes = {

// };


export default Task;
